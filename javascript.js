$(document).ready(function() {

	// Animate anchor scroll from #signup //
	$('#signup').removeAttr('href');
	$('#signup').click(function() {
		$('html, body').animate({
			scrollTop: $('#sage').offset().top
		}, 500);
	});

	// Replace placeholder with value if browser does not support placeholder //
	var inputTest = document.createElement('input');
	if('placeholder' in inputTest) {
		return;
	} else {
		$('input[type=email]').removeAttr('placeholder');
		$('input[type=text]').removeAttr('placeholder');
		$('input[type=email]').attr('value', "Your email address");
		$('input[type=text]').attr('value', "Your location (e.g., Chicago)");
	}

});