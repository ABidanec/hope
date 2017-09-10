$(document).ready(function(){
	_moduleSlider.action();
	_moduleToTop.action();
});

var _moduleSlider = (function(){
	var slider = $('.b-slider__list');

	return {
		action: function(){
			slider.slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 3000,
				fade: true,
				pauseOnHover: true,
				adaptiveHeight: true
			});
		}
	}
})();

var _moduleToTop = (function(){

	var scroll = $(".b-top-scroll"),
		top = 300,
		delay = 1800;
	return {
		action: function(){
			$(window).scroll(function() {
 				if($(this).scrollTop() != top) {
					scroll.fadeIn("slow");
				} else {
					scroll.fadeOut("slow");
				}
			});
			scroll.click(function() {
				$('body,html').animate(
					{"scrollTop" : "0"},
					delay
				);
			});
		}
	}
})();