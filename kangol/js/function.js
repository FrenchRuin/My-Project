$(function () {


  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 10) {
      $('header').addClass('on')
    } else {
      $('header').removeClass('on')
    }
  })

  //gnb lnb

  const $gnb = $('.gnb > li')
  const $lnb = $('.lnb_wrap > .lnb')
  for (let i = 0; i < $gnb.length; i++) {
    let leftVal = $gnb.eq(i).offset().left

    if (i === 0) {
      $lnb.eq(i).css({
        left: leftVal
      })
    } else {
      $lnb.eq(i).css({
        left: leftVal + 10
      })
    }
  }


  //메인 슬라이드
  const $slides = $('#main > .slides > .slides-container')
  const $indicator = $('#main > .slides > .indicator > li ')
  const $nextBtn = $('#main > .slides > .next')
  const $prevBtn = $('#main > .slides > .prev')

  let nowIdx = 0;

  $nextBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 4) {
      nowIdx++
    } else {
      nowIdx = 0
    }
    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on')

    $slides.stop().animate({
      left: '-100%'
    }, 600, function () {
      $('#main > .slides > .slides-container > a').first().appendTo($slides)
      $slides.css({
        left: '0'
      })
    })
  })
  $prevBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--
    } else {
      nowIdx = 4
    }
    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on')

    $slides.stop().animate({
      left: '100%'
    }, 600, function () {
      $('#main > .slides > .slides-container > a').last().prependTo($slides)
      $slides.css({
        left: '0'
      })
    })
  })

  $indicator.on('click', function (evt) {
    evt.preventDefault();
    nowIdx = $(this).index()


    $slides.stop().animate({
      left: -(100 * nowIdx) + '%'
    })

    $indicator.eq(nowIdx).addClass('on').siblings().removeClass('on')
  })

  // NEW IN 슬라이드

  const $newIndicator = $('#new > .new-indicator > li')
  const $newMnu = $('#new > .mnu')
  let newIdx = 0;

  $newIndicator.on('click', function (evt) {
    evt.preventDefault();

    newIdx = $(this).index()

    $newIndicator.eq(newIdx).addClass('on').siblings().removeClass('on')
    $newMnu.eq(newIdx).addClass('on').siblings().removeClass('on')
  })

  //WEEKLY BEST 

  const $weekIndicator = $('#week > .week-indicator > li')
  const $weekMnu = $('#week > .mnu')
  let weekIdx = 0;

  $weekIndicator.on('click', function (evt) {
    evt.preventDefault();

    weekIdx = $(this).index()

    $weekIndicator.eq(weekIdx).addClass('on').siblings().removeClass('on')
    $weekMnu.eq(weekIdx).addClass('on').siblings().removeClass('on')
  })



  //ASIDE
  const $aside = $('aside')
  const $push = $('aside>ul>.push')
  const $up = $('.up')
  const $down = $('.down')

  $push.on('click', function (evt) {
    evt.preventDefault();

    $aside.stop().animate({
      right: '-50px'
    })
  })

  $up.on('click', function (evt) {
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop: 0
    })
  })
  $down.on('click', function (evt) {
    evt.preventDefault();
    let downVal = $('#wrap').height()
    $('html,body').stop().animate({
      scrollTop: downVal
    })
  })

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > $('#main>.slides').height() - 100) {
      $aside.addClass('on')
    } else {
      $aside.removeClass('on')
    }
  })



});