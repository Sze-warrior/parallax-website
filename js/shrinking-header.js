$(document).ready(function(){

	$(window).on("scroll", function() {
    	if($(window).scrollTop() > 300) {
        	$(".header").addClass("shrink-up");
    	} else if($(window).scrollTop() < 300) {
        	//remove the background property so it comes transparent again (defined in your css)
       		$(".header").removeClass("shrink-up");
    	}
	});
});