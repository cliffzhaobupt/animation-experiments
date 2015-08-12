$('.heart-js-forever-animation').hover(function(event) {
  var heart = $(event.currentTarget);
  heart.delay(400);

  function heartZoom() {
    heart.animate({
      'width': '+=40px',
      'top': '-=20px',
      'right': '-=20px'
    }, 600).animate({
      'width': '-=40px',
      'top': '+=20px',
      'right': '+=20px'
    }, 400, function () {
      heartZoom();
    });
  }

  heartZoom();
}, function(event) {
  $(event.currentTarget).stop(true).css({
    'top': '50px',
    'right': '50px',
    'width': '200px'
  });
});
