(function ($) {
	
// FAQ accordion effect
$(document).ready(function() {
	$('.accordian-title').click(function() {
		$(this).next().slideToggle('fast');
	});
});

})(jQuery);