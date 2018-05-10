
$(window).load(function() {
  // Animate loader off screen
  $(".loader").delay().fadeOut("slow");
});


//Wow JS
new WOW().init();

//AOS JS
AOS.init();




// Slick Slider carousel
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });

  $('.caption_slides').slick({
    dots: true
  });

});




/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



$('#mySidenav a').on('click', function(){
    $("#mySidenav").hide();

});

$('#openmelad').on('click', function(){
    $("#mySidenav").show();

});

$('.slides').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
