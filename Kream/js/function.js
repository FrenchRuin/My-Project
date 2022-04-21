$(function () {


  const $slides = $('#slides .slides-container > p')
  const $slides_indicator = $(' #slides > .slides-indicator>li')
  const $nextBtn = $('.right')
  const $prevBtn = $('.left')

  let nowIdx = 0;

  let intavalKey = null;

  let slideFn = function () {
    $slides.eq(nowIdx).fadeIn().siblings().fadeOut()
    $slides_indicator.eq(nowIdx).addClass('on').siblings().removeClass('on')
  }
  $nextBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 5) {
      nowIdx++
    } else {
      nowIdx = 0;
    }

    slideFn();
  })
  $prevBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--
    } else {
      nowIdx = 5;
    }


    slideFn();
  })

  $slides_indicator.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $(this).index();

    slideFn();
  })

  $(window).on('load', function () {
    intavalKey = setInterval(function () {
      $nextBtn.trigger('click')
    }, 3000)
  })
})