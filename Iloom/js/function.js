$(function () {

  const $slides = $('#main > .slides > .frame')

  const $next = $('.next')
  const $prev = $('.prev')

  const $arrow = $('.arrow')

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

  $arrow.on('click', function (evt) {
    evt.preventDefault();

    $(this).toggleClass('up')
  })



  // 전체메뉴

  const $allMnu = $('.all_menu')
  const $close = $('.close')
  const $shadow = $('.mnu_shadow')

  $allMnu.on('click', function (evt) {
    evt.preventDefault();
    $('.mnubox').removeClass('off')
    $shadow.addClass('on')

  })
  $close.on('click', function (evt) {
    evt.preventDefault();
    $('.mnubox').addClass('off')
    $shadow.removeClass('on')
  })
})