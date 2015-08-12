var zoomAnim, rotateAnim;

$('.heart-scale-gsap-animation').hover(function(event) {
  if (zoomAnim) {
    zoomAnim.play();
    return true;
  }

  var heart = $(event.currentTarget);
  zoomAnim = new TimelineLite({delay: 0.4});
  zoomAnim.to(heart, 0.4, {transform: 'scale(1.2)'});
  zoomAnim.to(heart, 0.6, {transform: 'scale(1)'});
}, function() {
  zoomAnim.pause();
  zoomAnim.progress(0);
});

$('.heart-rotate-gsap-animation').hover(function(event) {
  if (rotateAnim) {
    rotateAnim.play();
    return true;
  }

  var heart = $(event.currentTarget);
  rotateAnim = TweenLite.to(heart, 1, {
    directionalRotation: '360_cw',
    delay: '0.4'
  });
}, function() {
  rotateAnim.pause();
  rotateAnim.progress(0);
});
