$(function () {

  const $gnb = $('.gnb')
  const $lnb = $('.lnb')


  $gnb.on('mouseover', function () {
    $lnb.stop().animate({
      top: 80
    }, 30)
    $('.lnb_shadow').stop().animate({
      top: 0
    }, 30)
  })
  $gnb.on('mouseout', function () {
    $lnb.stop().animate({
      top: -400
    }, 30)
    $('.lnb_shadow').stop().animate({
      top: -400
    }, 30)
  })





  // 메인슬라이드


  const $container = $('.slides-container')

  const $btnNext = $('.next')
  const $btnPrev = $('.prev')


  let nowIdx = 5;


  $btnNext.on('click', function (evt) {
    evt.preventDefault();



    if (nowIdx < 9) {
      nowIdx++;
    } else {
      nowIdx = 5;
    }

    $container.stop().animate({
      left: '-600%'
    }, 400, function () {
      $('.slides>.slides-container>p').first().appendTo($container);
      $container.css({ left: '-500%' })
    })


  })
  $btnPrev.on('click', function (evt) {
    evt.preventDefault();



    if (nowIdx > 5) {
      nowIdx--;
    } else {
      nowIdx = 9;
    }

    $container.stop().animate({
      left: '-400%'
    }, 400, function () {
      $('.slides>.slides-container>p').last().prependTo($container);
      $container.css({ left: '-500%' })
    }

    )

  })

  //제품 슬라이드 

  const $mainSlides = $('body #wrap section #main-product > .slides-main > .main-slides-container')
  const $subSlides = $('body #wrap section #main-product > .slides-sub > .sub-slides-container')

  const $words = $('.slides-sub > .sub-slides-container > div > span')

  const $proSlidesBtn = $('body #wrap section #main-product > .pro-next')

  let proIdx = 0;
  $proSlidesBtn.on('click', function (evt) {
    evt.preventDefault();



    if (proIdx < 3) {
      proIdx++
    } else {
      proIdx = 0
    }

    $mainSlides.stop().animate({
      left: '-4750px'
    }, 400, function () {
      $('.slides-main > .main-slides-container > p').first().appendTo($mainSlides);
      $mainSlides.css({
        left: '-3800px'
      })
    })

    $subSlides.stop().animate({
      left: '-3050px'
    }, 400, function () {
      $('.slides-sub > .sub-slides-container > div').first().appendTo($subSlides);
      $subSlides.css({
        left: '-2440px'
      })
    })
    $words.eq(proIdx + 4).stop().animate({
      opacity: 1
    })
  })


})