$(document).on("pageinit", '#page2', function(event){
    event.preventDefault();
    $.ajax({
        url: server.host_port+'/',//config
        type: 'GET',
        dataType: 'jsonp',
        contentType: 'application/json',
        error: function(xhr){
            console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        },
        success: function(response) {
            if(response == 'undefined') {
                window.location.href = 'http://192.168.1.120:8888/soccer/#page1';
            } else {
                // if()//current URL
                window.location.href = 'http://192.168.1.120:8888/soccer/#page2';
                var trHTML = '';
                var divHTML = '';
                //for schedule
                $.each(response[0], function (i, item) {
                    trHTML += '<tr><td style="text-align:center;vertical-align:middle">' + 
                    item.date + '</td><td style="text-align:center;vertical-align:middle"><div class="in-button"><i class="fa fa-user-plus" style="color:#38c;"></i><a>  I\'m in</a></div></td></tr>';
                });
                $(trHTML).appendTo('#records_table').trigger('create');
                //for attending
                $.each(response[1], function (i, item) {
                    divHTML += '<div id="' + item.first_name + '_' + item.date + '" style="text-align:center;border-style:none;padding-top:10px;">' + item.first_name + '</div>';
                });
                $(divHTML).appendTo('#white-team').trigger('create');
            }
        }
    });

    socket.on('chat message', function(msg){
        var info = msg.split(" ");
        if(info[0] == 'in') {
            var insertHTML = '';
            insertHTML += '<div id="' + info[1] + '_2015-10-12' + '" style="text-align:center;border-style:none;padding-top:10px;">' + info[1] + '</div>';
            $(insertHTML).hide().appendTo('#white-team').fadeIn(1000);
        } else { //out in this case
            var deleteHTML = '';
            deleteHTML += '<div id="' + info[1] + '_2015-10-12' + '" style="text-align:center;border-style:none;padding-top:10px;">' + info[1] + '</div>';
            // $(deleteHTML).hide().appendTo('#white-team').fadeIn(1000);
            $('#' + info[1] + '_2015-10-12').remove().fadeIn(1000);
        }
    });
    
    //********** page 2 actions start **********
    $('#page2').on('vclick', '.in-button', function(e) {
        e.preventDefault(); //Why is this neccessary?
        $.ajax({
            url: server.host_port+'/in-update',//config
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'application/json',
            error: function(xhr){
                console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
            },
            success: function(response) {
                socket.emit('chat message', 'in '+response); 
            }
        });
        $(this).parent().html('<div class="cancel-button"><i class="fa fa-user-times" style="color:#059;"></i><a style="color:#059;">  cancel</a></div>');            
    });

    $('#page2').on('vclick', '.cancel-button', function(e) {
        e.preventDefault(); //Why is this not neccessary then?
        $.ajax({
            url: server.host_port+'/cancel-update',//config
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'application/json',
            error: function(xhr){
                console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
            },
            success: function(response) {
                socket.emit('chat message', 'cancel '+response); 
            }
        });
        $(this).parent().html('<div class="in-button"><i class="fa fa-user-plus" style="color:#38c;"></i><a>  I\'m in</a></div>');        
    });
    //********** page 2 actions end **********
});

$(document).on("pageinit", '#page1', function(event){
    //********** page 1 actions start **********
    $('#page1').on('vclick', '#login_submit', function(e) {
        e.preventDefault(); //Why is this neccessary?
        $.ajax({
            url: server.host_port+'/auth',
            type: 'GET',//Why cant set POST here?
            data: {login_name:$('#login').val(), login_pwd:$('#pwd').val()},
            dataType: 'jsonp',
            contentType: 'application/json',
            error: function(xhr){
                console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
            },
            success: function(response) {
                console.log(response);
                flash.show('Login Success!');
                if(response != "user not found") {
                    setTimeout(function(){
                        window.location.href = 'http://192.168.1.120:8888/soccer/#page2';
                    }, 1000);
                } else {
                    flash.show('Invalid Username/Password!');
                }
            }
        });        
    });
    //********** page 1 actions end **********
    var flash = {
        exists: function() {
            return ($('#flash').length > 0);
        },
        show: function(msg) {
            var message;
            // Hide message when it's clicked on
            $('body').delegate('#flash', 'click', function() {
                flash.hide();
            });
            $('#flash').html(msg);
            // Display the flash
            $('#flash').slideDown();
            // Clear the timeout if one is set
            clearTimeout(flash.timeout);
            // Hide the message after 5 seconds
            flash.timeout = setTimeout(function() {
                flash.hide();
            }, 5000);
        },
        hide: function() {
            // Hide the flash
            $('#flash').slideUp();
            // Clear the timeout if it exists
            if (flash.timeout) {
                clearTimeout(flash.timeout);
            }
        },
        timeout: null
    };
    $('#register_submit').click(function() {
        flash.show('Invalid Username/Password!');
        return false;
    });
});

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
    // alert('triggered once!');
}
// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
//
function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
}
// Handle the resume event
//
function onResume() {
    console.log('hahahahahahha');
}