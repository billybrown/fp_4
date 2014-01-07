(function ($) {
	
$(document).ready(function(){
	
	$('.tabs--nav li').click(function() {
		$('.tabs--nav li').removeClass('active');
		$(this).addClass('active');
		var tabs_id = $(this).attr('id');
		var tabs_id_pane = tabs_id.replace('-nav', '-pane');
		$('.tabs--pane').removeClass('active');
		$('#' + tabs_id_pane).addClass('active');
	});
	
});

})(jQuery);
