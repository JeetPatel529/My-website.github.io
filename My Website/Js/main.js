AOS.init({
  duration: 1000,
});


let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.99,
  fill: { gradient: ['#a445b2', '#fa4299'] }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function (event, progress, stepValue) {
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.90
});
$(".node .bar").circleProgress({
  value: 0.50
});



var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 400,
    stretch: 1,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  }
});



$(window).scroll(function () {
  if ($(this).scrollTop() > 3000) {
    $('.B_top').fadeIn('slow');
  } else {
    $('.B_top').fadeOut('slow');
  }
});
$('.B_top').click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 1500)
});

