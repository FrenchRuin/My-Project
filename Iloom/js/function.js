$(function () {

  const $slides = $('#main > .slides > .frame')

  const $next = $('.next')
  const $prev = $('.prev')

  let nowIdx = 0;


  $next.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 4) {
      nowIdx++

    } else {
      nowIdx = 0;
    }

    $slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
  })
  $prev.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--

    } else {
      nowIdx = 4;
    }

    $slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
  })

  $(window).on('load', function () {
    setInterval(function () {
      $next.trigger('click')
    }, 5000)
  })

})