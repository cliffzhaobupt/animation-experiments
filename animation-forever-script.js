var intervalId;

$('.heart-js-forever-animation').hover(function(event) {
  var heart = $(event.currentTarget);
  heart.delay(400);
  intervalId = setInterval(function() {
    if (heart.queue('fx').length == 0) {
      heart.animate({
        'width': '+=40px',
        'top': '-=20px',
        'right': '-=20px'
      }, 600).animate({
        'width': '-=40px',
        'top': '+=20px',
        'right': '+=20px'
      }, 400);
    }
  }, 100);
}, function(event) {
  $(event.currentTarget).finish();
  clearInterval(intervalId);
});
