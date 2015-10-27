//= require_tree .

$('div.slides').slick({
  swipe: true,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  infinite: true,
  fade: true
});

$('div.slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var selector = ($('*[data-slick-index="'+ nextSlide +'"]'));

  $('body').css('background-color', $(selector).attr('data-background'));

  $('.logo a img').fadeOut('fast', function(){
    $('.logo a img').attr('src', "images/titles/" + nextSlide + ".png").fadeIn('fast');
  });
});

$('div.slides').on('swipe', function(event, slick, direction){
  console.log('edge was hit')
  console.log(direction)
});
