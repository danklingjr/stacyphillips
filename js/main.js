// $(".nav").stickyPanel();
$('.flexslider-1').flexslider({
	controlNav: false,
	directionNav: false,
	animation: "fade",
	animationLoop: true, 
	reverse: false,
	direction: "vertical",
	randomize: true
});
$('.flexslider-2').flexslider({
	controlNav: false,
	directionNav: false,
	animation: "fade",
	animationLoop: true, 
	reverse: true,
	direction: "vertical",
	initDelay: 800,
	randomize: true
});


$(document).ready(function() {
	var msnry = new Masonry( '.portfolio', {
	  // options
	});
});