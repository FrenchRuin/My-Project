$(function () {


  const $slides = $('#slides .slides-container > p')
  const $slides_indicator = $(' #slides > .slides-indicator>li')
  const $nextBtn = $('.right')
  const $prevBtn = $('.left')

  const $aside = $('aside')

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

  // TOP 버튼
  $aside.on('click', function (evt) {
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop: 0
    })
  })

  $(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 120) {
      $aside.stop().fadeIn(120);
    } else {
      $aside.stop().fadeOut(120);
    }
    const view = scrollTop + $(this).height() - $('footer').offset().top;
    if (view > 0) {
      $aside.css({ marginBottom: view })

    } else {
      $aside.css({ marginBottom: 0 })
    }
  })


  //STYLE PICKS 슬라이드

  const $style_slides = $('#stylePicks > .slides > .slides-container')
  const $style_slides_nextBtn = $('#stylePicks > a.next')


  let style_slides_Idx = 0;
  $style_slides_nextBtn.on('click', function (evt) {
    evt.preventDefault();

    if (style_slides_Idx < 4) {
      style_slides_Idx++;

    } else {
      style_slides_Idx = 0;

    }

    $style_slides.stop().animate({
      left: (-200 * style_slides_Idx) + 'px'
    })

  })
  //Daily Looks 슬라이드

  const $daily_slides = $('#dailylook > .slides > .slides-container')
  const $daily_slides_nextBtn = $('#dailylook > a.next')


  let daily_slides_Idx = 0;
  $daily_slides_nextBtn.on('click', function (evt) {
    evt.preventDefault();

    if (daily_slides_Idx < 4) {
      daily_slides_Idx++;

    } else {
      daily_slides_Idx = 0;

    }

    $daily_slides.stop().animate({
      left: (-200 * daily_slides_Idx) + 'px'
    })

  })
})