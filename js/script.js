$(document).ready(function(){
  $('.slider').slick();
});

$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  

});
$(function(){
  $("#num1").countMe(4,6);
  $("#num2").countMe(4,6);
  $("#num3").countMe(4,6);
});

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

