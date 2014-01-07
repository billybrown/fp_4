$(document).ready(function() {


	//toggle the common questions and what not at the bottom of donation pages
    $('.accordian-list h3').click(function(){
		$(this).next().slideToggle('fast');
	});

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

    //switch out the monthly giving language
    $("#recurring-donation-button").click(function() {
      $(".monthly-text").css('display', 'none');
      $(".single-text").css('display', 'block');
    });
    $("#single-donation-button").click(function() {
      $(".single-text").css('display', 'none');
      $(".monthly-text").css('display', 'block');
    });

    // slideshow action
    $(".slideshow li").click(function() {
      var src = $(this).children('img').attr("src");
      var src2 = src.replace('_small', '');
      var src3 = src2.replace('/smalls', '');
      $(this).children('img').attr("src", src3);
      $(this).addClass('big');
    });

});



$(window).load(function() {

	/* this gets the position of the nav element on screen */
	var fixed_form = $('.form-column').offset().top - parseFloat($('.form-column').css('marginTop').replace(/auto/, 0));
	var window_height = $(window).height();
	var form_height = $('.form-column').height() + 40;
    var intro_info_height = $('.intro-info').height() + 40;

    var whats = intro_info_height - form_height;


    if(window_height >= form_height && form_height <= intro_info_height) {

  		/* make the nav stay fixed when you scroll down */
  		$(window).scroll(function (event) {
  			// what the y position of the scroll is
  			var y = $(this).scrollTop();

  			// if the y position of the scoll is greater then the top of .petition form, add a fixed class
  			if ( (y >= fixed_form - 20) && (!$("div.recent-signers").length) ) {
  				$('.form-column').addClass('fixed');
  			} else {
  				$('.form-column').removeClass('fixed');
  			}

        if (y >= whats + 108) {
          $('.form-column').removeClass('fixed');
          $('.form-column').css("margin-top", whats - 40);
        } else if ( (y >= fixed_form - 20) && (!$("div.recent-signers").length) ){
          $('.form-column').addClass('fixed');
          $('.form-column').css("margin-top", 0);         
        } else {
          $('.form-column').removeClass('fixed');
          $('.form-column').css("margin-top", -10);
        }

        console.log("y: " + y);
  			
  		});
  	}
	  console.log("heyo: " + whats);
});

function findcolumns() {

  // get the window width
  var thewidth = $(window).width();

  // if the width is greater the 850 split the comments up into 4 columns and activate masonry for layout
  if (thewidth >= 850){
    $(function(){
      $('#comments-container').masonry({
        itemSelector: '.item',
        // set columnWidth a fraction of the container width
        columnWidth: function( containerWidth ) {
          return containerWidth / 4;
        }
      });
    });
  }
}



$(document).ready(function() {

  // give all the speach bubble comments a random color. This gives them a random class, which each have a set color to them
  var colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7'];
  $('#comments-container li').each(function() {
    var random = Math.floor(Math.random() * 7);
    // this is a quick hack hardcodiing the color
      $(this).addClass('color-4');
      
  });
  $('p.comment').each(function() {
      // console.log($(this).siblings($('div.triangle')));
      if ($(this).html() == '') {
        $(this).hide();
        $(this).siblings().hide();
        // $(this).siblings('div.triangle').hide();
      } 
  });

  // comment layout
    findcolumns();
});850
	
$(window).resize(function() {

  // comment layout
    findcolumns();

});


