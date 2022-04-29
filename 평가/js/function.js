$(function () {

  const $slides = $('.slides > .slides-container > .frame')
  const $detail = $('.slides > .slides-contents .slides-detail > p')

  const $indicator = $('.slides > .indicator > ul > li')
  const $autoBtn = $('.slides > .indicator > .auto')

  const $nextBtn = $('.slides > .slides-btn > a.next')
  const $prevBtn = $('.slides > .slides-btn > a.prev')

  let interval = null;

  let nowIdx = 0;



  $('.news').css({

  })

  function slideFn() {
    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on')
    $detail.eq(nowIdx).fadeIn().siblings().fadeOut();
    $slides.eq(nowIdx).fadeIn().siblings().fadeOut();
  }

  $nextBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 8) {
      nowIdx++
    } else {
      nowIdx = 0
    }
    slideFn()
  })
  $prevBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--
    } else {
      nowIdx = 8
    }

    slideFn()
  })

  $indicator.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $(this).index();

    slideFn()
  })



  $(window).on('load', function () {
    interval = setInterval(function () {
      $nextBtn.trigger('click')
    }, 2000)


    $autoBtn.on('click', function (evt) {
      evt.preventDefault();

      if ($autoBtn.hasClass('paused')) {
        $autoBtn.removeClass('paused')
        clearInterval(interval);
      } else {
        $autoBtn.addClass('paused')
        interval = setInterval(function () {
          $nextBtn.trigger('click')
        }, 2000)
      }
    })
  })
})