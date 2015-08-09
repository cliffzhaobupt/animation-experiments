$('.heart-js-animation').hover(function(event) {
  $(event.currentTarget).delay(400).animate({
    'width': '+=40px',
    'top': '-=20px',
    'right': '-=20px'
  }, 600).animate({
    'width': '-=40px',
    'top': '+=20px',
    'right': '+=20px'
  }, 400);
}, function(event) {
  $(event.currentTarget).finish();
});
