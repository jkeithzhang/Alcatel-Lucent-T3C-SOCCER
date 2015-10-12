$(document).on("pageinit", "#page1", function(event){
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
                divHTML += '<div style="text-align:center;border-style:none;padding-top:10px;">James Tan</div>';
            });
            $(divHTML).appendTo('#white-team').trigger('create');
        }
    });

    socket.on('chat message', function(msg){
        var insertHTML = '';
        insertHTML += '<div style="text-align:center;border-style:none;padding-top:10px;">James</div>';
        $(insertHTML).hide().appendTo('#white-team').fadeIn(1000);
    });

    $('#page1').on('vclick', '.in-button', function(e) {
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
                if(typeof(response)=='string') {
                    alert(JSON.stringify(response));                    
                } else {
                    alert('success!');
                }
                // $('#records_table').append(trHTML);
            }
        });
        $(this).parent().html('<div class="cancel-button"><i class="fa fa-user-times" style="color:#059;"></i><a style="color:#059;">  cancel</a></div>');
        socket.emit('chat message', 'James joining');             
    });

    $('#page1').on('vclick', '.cancel-button', function(e) {
        e.preventDefault(); //Why is this not neccessary then?
        $(this).parent().html('<div class="in-button"><i class="fa fa-user-plus" style="color:#38c;"></i><a>  I\'m in</a></div>');
        socket.emit('chat message', 'James joining');             
    });
});

// $(document).on( "pageinit", "#page1", function( event ) {
//     // alert( "This page was just enhanced by jQuery Mobile!" );
//     $('div').on( "vclick", ".in-button", function() {
//       $(this).html('<i class="fa fa-user-times" style="color:#059;"></i><a style="color:#059;">  cancel</a>');
//       socket.emit('chat message', 'James joining');
//     });
// });
// $(document).bind('pageinit', function(){
//     // Code goes here
// });    


function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
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