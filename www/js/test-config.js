$(function() {
	
	$('#testbutton').click(function() {
		console.log(server.host + ":" + server.port);
        $.ajax({
            url: "http://" + server.host + ":" + server.port + '/server/controller/test.php',
            type: 'GET',
            data: {
                'ke': 'name'
            },
            success: function(response) {
                alert(response);
            }
        });		
	});
})