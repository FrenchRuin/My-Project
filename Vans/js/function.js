$(function () {


  const $gnb = $('.gnb>li')

  const $lnbBg = $('.lnb_bg')

  $gnb.on('mouseover', function () {
    if ($(this).index() !== 5 && $(this).index() !== 6) {
      $lnbBg.show()
    }
  })
  $gnb.on('mouseleave', function () {
    $lnbBg.hide()
  })

  // notice 슬라이드

  const $notice = $('.notice>li')
  const $noticeBtn = $('.h_bottom>.next')
  let noticeIdx = 0;

  for (let i = 0; i < $notice.length; i++) {
    $notice.eq(i).css({
      marginLeft: -$notice.eq(i).width() / 2
    })
  }

  $noticeBtn.on('click', function () {
    if (noticeIdx < 4) {
      noticeIdx++;
    } else {
      noticeIdx = 0
    }

    $notice.eq(noticeIdx).fadeIn(400).siblings().fadeOut(400)
  })

  $(window).on('load', function () {
    setInterval(function () {
      $noticeBtn.trigger('click')
    }, 4000)
  })


  //메인 슬라이드

  const $mainSlides = $('#main>.main_top>.slides>.slide')
  const $mainIndicator = $('#main>.main_top>.slides>.indicator>li')
  const $mainNext = $('#main>.main_top>.slides>.next')
  const $mainPrev = $('#main>.main_top>.slides>.prev')

  let mainIdx = 0;

  function main() {
    $mainSlides.eq(mainIdx).fadeIn().siblings('.slide').fadeOut()
    $mainIndicator.eq(mainIdx).addClass('on').siblings().removeClass('on')
  }

  $mainNext.on('click', function (evt) {
    evt.preventDefault();

    if (mainIdx < 3) {
      mainIdx++
    } else {
      mainIdx = 0
    }

    main();

  })
  $mainPrev.on('click', function (evt) {
    evt.preventDefault();

    if (mainIdx > 0) {
      mainIdx--
    } else {
      mainIdx = 3
    }
    main();

  })


  $mainIndicator.on('click', function () {

    mainIdx = $(this).index()

    main();


  })

  //NEW ARRIVAL SLIDES
  const $newSlides = $('#new>.slides>.slide-view>.slides-container')
  const $newNext = $('#new>.slides>.next')
  const $newPrev = $('#new>.slides>.prev')
  const $newIndicatoer = $('#new>.slides>.indicator>li')

  let newIdx = 0;

  function newslides() {
    $newSlides.stop().animate({
      left: (-1300 * newIdx) + 'px'
    })

    $newIndicatoer.eq(newIdx).addClass('on').siblings().removeClass('on')
  }

  $newNext.on('click', function (evt) {
    evt.preventDefault();

    if (newIdx < 3) {
      newIdx++
    } else {
      newIdx = 0
    }
    newslides();


  })
  $newPrev.on('click', function (evt) {
    evt.preventDefault();

    if (newIdx > 0) {
      newIdx--
    } else {
      newIdx = 3
    }

    newslides();
  })


  $newIndicatoer.on('click', function (evt) {
    evt.preventDefault();
    newIdx = $(this).index()

    $newSlides.stop().animate({
      left: (-1300 * newIdx) + 'px'
    })


    newslides();


  })

  // new 메뉴 ul 위치

  const $allMnu = $('.new_mnu>.mnu>ul')

  console.log($allMnu.length)
  for (let i = 0; i < $allMnu.length; i++) {


    $allMnu.eq(i).css({
      // marginLeft: -($(this).eq(i).width() / 2),
      marginTop: -($allMnu.eq(i).height() / 2),
      marginLeft: -($allMnu.eq(i).width() / 2)
    })

  }


  //best 슬라이드
  const $bestSlides = $('#best>.slides>.slide-view>.slides-container')
  const $bestNext = $('#best>.slides>.next')
  const $bestPrev = $('#best>.slides>.prev')
  const $bestIndicatoer = $('#best>.slides>.indicator>li')

  let bestIdx = 0;

  function bestslides() {
    if (bestIdx == 3) {
      $bestSlides.stop().animate({
        left: ((-1300 * bestIdx) + 311) + 'px'
      })
    } else {
      $bestSlides.stop().animate({
        left: (-1300 * bestIdx) + 'px'
      })
    }


    $bestIndicatoer.eq(bestIdx).addClass('on').siblings().removeClass('on')
  }

  $bestNext.on('click', function (evt) {
    evt.preventDefault();

    if (bestIdx < 3) {
      bestIdx++
    } else {
      bestIdx = 0
    }
    bestslides();


  })
  $bestPrev.on('click', function (evt) {
    evt.preventDefault();

    if (bestIdx > 0) {
      bestIdx--
    } else {
      bestIdx = 3
    }

    bestslides();
  })


  $bestIndicatoer.on('click', function (evt) {
    evt.preventDefault();
    bestIdx = $(this).index()

    $bestSlides.stop().animate({
      left: (-1300 * bestIdx) + 'px'
    })


    bestslides();


  })

})