console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$("#aboutbutton").click(function() {
	$('html,body').animate({
		scrollTop: $("#redabout").offset().top},
		'slow');
	});


$("#workbutton").click(function() {
	$('html,body').animate({
		scrollTop: $("#whitework").offset().top},
		'slow');
	});

$("#contactbutton").click(function() {
	$('html,body').animate({
		scrollTop: $("#redcontact").offset().top},
		'slow');
	});
