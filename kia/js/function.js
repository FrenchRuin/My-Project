


$(function () {

  const $header = $('header')



  const $slides = $('#main > .slides > div')
  const $indicator = $('#main > .indicator > ul > li')
  const $autoBtn = $('#main > .indicator >.autoPlay')
  const $next = $('#main >.next')
  const $prev = $('#main >.prev')

  let nowIdx = 0;

  function slideFn() {
    $slides.eq(nowIdx).fadeIn().siblings().fadeOut();
    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on')
  }


  $(window).on('scroll', function () {


    if ($(this).scrollTop() > 20) {
      $header.addClass('down')
    } else {
      $header.removeClass('down')
    }
  })



  $next.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 4) {
      nowIdx++
    } else {
      nowIdx = 0
    }

    slideFn();
  })
  $prev.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--
    } else {
      nowIdx = 4
    }

    slideFn();
  })




  $indicator.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $(this).index();

    slideFn();
  })

  $autoBtn.on('click', function (evt) {
    evt.preventDefault();

    $autoBtn.children('i').toggleClass('fa-solid fa-circle-pause')
  })
})