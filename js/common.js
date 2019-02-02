$(document).ready(function(){
 
  var $header = $("#header");

  $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && $header.hasClass("default") ){
          $header.removeClass("default").addClass("fixed");
      } else if($(this).scrollTop() <= 100 && $header.hasClass("fixed")) {
          $header.removeClass("fixed").addClass("default");
      }
  });//scroll
});
