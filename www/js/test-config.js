$(function() {
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
            $.each(response, function (i, item) {
                trHTML += '<tr><td style="text-align:center;vertical-align: middle">' + 
                item.date + '</td><td style="text-align:center;vertical-align: middle"><a class="in-button">I\'m in</a></td></tr>';
            });
            // console.log(trHTML);
            $(trHTML).appendTo('#records_table').trigger('create');
            // $('#records_table').append(trHTML);
        }
    });

    $('body').on('click', '.join', function() {    
        if($(this).next().is(':checked') == false) {   //join
            socket.emit('chat message', 'James joining');
        } else { //unjoin
            // socket.emit('chat message', 'James unjoin');        
        }        
    });

    // socket.emit('chat message', 'James joining');
    socket.on('chat message', function(msg){
        var insertHTML = '';
        insertHTML += '<div id="white-team" class="ui-bar ui-bar-a" style="text-align:center;">James</div>';
        $(insertHTML).hide().appendTo('#white-team').fadeIn(1000);
    }); 

});

// $(document).on( "pageinit", "#page1", function( event ) {
//     alert( "This page was just enhanced by jQuery Mobile!" );
// });

$(document).on( "vclick", ".in-button", function() {
  $(this).html("joined");
  socket.emit('chat message', 'James joining');
});

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