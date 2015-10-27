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


$('div.slides').on('beforeChange', function(event, slick, currentSlideIndex, nextSlideIndex) {
  $currentSlide = $(slick.$slides[currentSlideIndex]);
  $nextSlide = $(slick.$slides[nextSlideIndex]);
  
  $currentImage = $currentSlide.find('.image-to-slide');
  $nextImage = $nextSlide.find('.image-to-slide');

  // Move content to left, so we are going to right
  if (currentSlideIndex < nextSlideIndex) {
    $nextImage.removeClass('animated move-to-default move-to-left').addClass('move-to-right');

    setTimeout(function() {
      $nextImage.addClass('animated').addClass('move-to-default');
    }, 0);

    $currentImage.removeClass('move-to-default move-to-right').addClass('animated move-to-left');
  }
  // Move content to right, so we are going to left
  else {
    $nextImage.removeClass('animated move-to-default move-to-right').addClass('move-to-left');

    setTimeout(function() {
      $nextImage.addClass('animated').addClass('move-to-default');
    }, 0);

    $currentImage.removeClass('move-to-default move-to-left').addClass('animated move-to-right');
  }
});