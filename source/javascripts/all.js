//= require_tree .

$('#myCarousel').on('slide.bs.carousel', function (e) {
  $('body').css('background-color', $(e.relatedTarget).attr('data-background'));
})
