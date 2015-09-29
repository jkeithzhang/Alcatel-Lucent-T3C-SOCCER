$(document).ready(function() {
    $.ajax({
        url: "http://" + server.host + ":" + server.port + '/server/controller/test.php',
        type: 'GET',
        dataType: 'json',
        error: function(xhr){
            alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        },
        success: function(response) {
            console.log(typeof(response))
            var trHTML = '';
            $.each(response, function (i, item) {
                trHTML += '<tr><td style="text-align:center;vertical-align: middle">' + 
                item.date + '</td><td style="text-align:center;vertical-align: middle">' + 
                item.weekday + '</td><td><div data-role="fieldcontain" style="margin-left: 30px"><fieldset data-role="controlgroup"><label><input type="checkbox" name="checkbox-0"/>In</label></fieldset></div></td></tr>';
            });
            console.log(trHTML);
            $(trHTML).appendTo('#records_table').trigger('create');
            // $('#records_table').append(trHTML);
        }
    });    
})