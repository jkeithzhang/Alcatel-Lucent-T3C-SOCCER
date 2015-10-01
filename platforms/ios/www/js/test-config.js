$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/',
        type: 'GET',
        dataType: 'jsonp',
        contentType: 'application/json',
        error: function(xhr){
            console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        },
        success: function(response) {
            console.log(JSON.stringify(response));
            // var trHTML = '';
            // $.each(response, function (i, item) {
            //     trHTML += '<tr><td style="text-align:center;vertical-align: middle">' + 
            //     item.date + '</td><td><div data-role="fieldcontain" style="margin-left: 30px"><fieldset data-role="controlgroup"><label><input type="checkbox" name="checkbox-0"/>Join</label></fieldset></div></td></tr>';
            // });
            // // console.log(trHTML);
            // $(trHTML).appendTo('#records_table').trigger('create');
            // // $('#records_table').append(trHTML);
        }
    });  
})

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