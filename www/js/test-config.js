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
                trHTML += '<tr><td style="text-align:center">' + item.id + '</td><td style="text-align:center">' + item.date + '</td><td style="text-align:center">' + item.weekday + '</td></tr>';
            });
            console.log(trHTML);
            $('#records_table').append(trHTML);
        }
    });    
})