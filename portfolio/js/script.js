// jQuery $ as shortcut - read from class in index.html -slides and folder superslides 


$(document).ready(function() {

	$('#slides').superslides({

// add fading animation

		animation: 'fade',
// every 5 s the background img changes
		
		play: 5000,

	});

});