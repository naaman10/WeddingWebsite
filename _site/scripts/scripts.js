$(document).ready(function (){
  $(".nav-link").click(function(){
    var navID = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $( navID ).offset().top
    }, 2000);
  });
});

$("#footerNav").hide();
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 600) {
    $('#footerNav').fadeIn();
    console.log( scroll );
  } else {
    $("#footerNav").fadeOut();
  };
});

//600
