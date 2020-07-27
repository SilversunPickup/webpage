// jQuery $ as shortcut - read from class in index.html -slides and folder superslides 


$(document).ready(function() {

	$('#slides').superslides({

// add fading animation

		animation: 'fade',
// every 10 s the background img changes

		play: 10000,
		pagination: false

	});
});
	var typed = new Typed(".typed", {
		strings: ["Data Consultant.", "Business Consultant.", "Predictive Analyst.", "Data Scientist."],
		typeSpeed: 100,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});


	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
        	items:5
        }
   	 }
	});

	$(function() {
		$('.chart').easyPieChart({
			   easing: 'easeInOut',
			   barColor: '#fff',
			   trackColor: false,
			   scaleColor: false,
			   lineWidth: 4,
			   size: 152,
			   onStep: function(from, to, percent) {
			   		$(this.el).find('').text(Math.round(percent));
			   }

			    });
  	  });




