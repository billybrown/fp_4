//
// Make donation amount buttons green when clicked
//

(function ($) {

  $(document).ready(function() {

    // Make donation amount buttons green when clicked
    $(".donation-amount label").click(function() {
      $(".donation-amount label").removeClass('selected');
      $(this).toggleClass('selected');
    });

    // remove green donation amounts when other amount is clicked
    $(".donation-amount-other").click(function() {
      $(".donation-amount label").removeClass('selected');
    });

    // make donation-type buttons green
    $("#type .input-button label").click(function() {
      $("#type .input-button label").removeClass('selected');
      $(this).toggleClass('selected');
    });

  });

})(jQuery);