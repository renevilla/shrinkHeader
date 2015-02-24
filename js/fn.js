$(function() {
	var shrinkHead = 50;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHead) {
			$('#head').addClass('shrink');
		}
		else {
			$('#head').removeClass('shrink');	
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset;
	}
});