// JavaScript Document
$(function() {
	var $win = $(window);
		$win.on('load resize', function() {
			var windowWidth = window.innerWidth;
				if (windowWidth > 769) {
					var navBox = $("#global-navi_fix");
						navBox.hide();
					var TargetPos = 450;
						$(window).scroll( function() {
						var ScrollPos = $(window).scrollTop();
						if( ScrollPos > TargetPos ) {
						navBox.fadeIn();
						}
						else {
							navBox.fadeOut();
						}
					});
				} else {
			navBox.hide();
		}
	});
});