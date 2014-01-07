//
// switch out the monthly giving language
//

(function ($) {

	$(document).ready(function() {

		$("#recurring-donation-button").click(function() {
			$(".monthly-text").css('display', 'none');
			$(".single-text").css('display', 'block');
		});

		$("#single-donation-button").click(function() {
			$(".single-text").css('display', 'none');
			$(".monthly-text").css('display', 'block');
		});

	});

})(jQuery);