function htmlEncode(value){
  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
  //then grab the encoded contents back out.  The div never exists on the page.
  return $('<div/>').text(value).html();
}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}

$(document).ready(function() {


    //toggle the common questions and what not at the bottom of donation pages
    $('.directory-element').each(function() {
		  var code = $(this).children('.directory-example').html();
      var encode = htmlEncode(code);
      $(this).children('.directory-code').html("<pre><code>"+encode+"</code></pre>")
    });

});