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
                item.date + '</td><td><div data-role="fieldcontain" style="margin-left: 30px"><fieldset data-role="controlgroup"><label class="join"><input type="checkbox" class="custom"/>Join</label></fieldset></div></td></tr>';
            });
            // console.log(trHTML);
            $(trHTML).appendTo('#records_table').trigger('create');
            // $('#records_table').append(trHTML);
        }
    });

    $('body').on('click', '.join', function() {    
        if($(this).next().is(':checked') == false) {   //join
            // alert('im joining');
            socket.emit('chat message', 'haha');
        } else { //un join
            // alert('no, im not going');
        }        
    });
    socket.on('chat message', function(msg){
      alert(msg);
    }); 
});


function send() {
    socket.broadcast.emit('chat message', 'James');
    console.log('message: '); 
}

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