$('.heart-scale-gsap-animation').animate({
  'transform': 'scale(1.2)'
}, 400).animate({
  'transform': 'scale(1)'
}, 600);

// $('.heart-rotate-gsap-animation').animate({
//   'transform': 'rotate(180deg)'
// }, 400).animate({
//   'transform': 'rotate(360deg)'
// }, 600);

TweenLite.to($('.heart-rotate-gsap-animation'), 1, {directionalRotation:"360_cw"});
