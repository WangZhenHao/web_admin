$(document).ready(function() {
	var webapp = {
		resizeWindow: function() {
			$(window).resize(function() {
					var w = $(window).width();
					// if(w <= 920) {
					// 	w = 920;
					// }
					$('#data-container').css({
						'width': (w - 250) + 'px'
					})
			});
			$(window).trigger('resize');
		},
		init: function() {
			this.resizeWindow();
		}
	};
	webapp.init();
});