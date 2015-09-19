//test
var MyObj = function() { 
	this.files = new Object();
	return this;
};

function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
};

var panel ='<div data-role="panel" data-theme="g" id="panel"><ul data-role="listview" data-theme="g" data-divider-theme="g"><li data-role="list-divider">Menu</li><li><a class="test" href="#">Next Game</a></li><li><a class="test" href="#">Availability</a></li><li data-role="list-divider">More Info</li><li><a class="test" href="#">Calendar</a></li><li><a class="test" href="#">Notification</a></li></ul></div>';

$(document).on('pagebeforecreate', function () {
    // if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
    // }
});