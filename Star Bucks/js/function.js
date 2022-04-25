$(function () {

  const $under = $('.lnb .under')
  const $lnb = $('.lnb')
  const $gnbmnu = $('.gnb > li')

  const $notice = $('.notice ul li')

  let underHeight = ['124px', '72px', '72px', '20px', '72px', '124px']
  let intervalkey = null;

  for (let i = 0; i < $under.length; i++) {

    $under.eq(i).css({
      bottom: '-' + underHeight[i]
    })

    $gnbmnu.eq(i).on('mouseenter', function () {

      $lnb.eq(i).stop().slideDown(200)
    })
    $gnbmnu.eq(i).on('mouseleave', function () {

      $lnb.eq(i).slideUp(20)
    })
  }
  let nowIdx = 0;

  $(window).on('load', function () {
    intervalkey = setInterval(function () {
      if (nowIdx < 3) {
        nowIdx++
      } else {
        nowIdx = 0
      }
      $notice.eq(nowIdx).addClass('on').siblings().removeClass('on')
    }, 3000)
  })

  // 스타벅스 프로모션 슬라이드

  const $proSlides = $('#promotion_slides > .slides-container')

  const $proNext = $('#promotion_slides .next')
  const $proPrev = $('#promotion_slides .prev')

  const $proIndicator = $('#promotion_slides').find('.index')

  const $proPlay = $('#promotion_slides > .indicator li:nth-child(1)')

  const $proDown = $('#news .down')

  let prointerval = null;

  console.log($proSlides.children('div').length)
  let proIdx = 0;
  $proNext.on('click', function (evt) {
    evt.preventDefault();

    if (proIdx < 2) {
      proIdx++
    } else {
      proIdx = 0
    }
    $proIndicator.eq(proIdx).addClass('on').siblings().removeClass('on')
    $proSlides.children('div').eq(2).addClass('on').siblings().removeClass('on')
    $proSlides.stop().animate({
      left: '-1090px'
    }, 400, function () {
      $proSlides.css({
        left: '-280px'
      })
      $('#promotion_slides > .slides-container > div').first().appendTo($proSlides)
    })
  })
  $proPrev.on('click', function (evt) {
    evt.preventDefault();

    if (proIdx > 0) {
      proIdx--;
    } else {
      proIdx = 2
    }

    $proSlides.children('div').eq(0).addClass('on').siblings().removeClass('on')
    $proIndicator.eq(proIdx).addClass('on').siblings().removeClass('on')
    $proSlides.stop().animate({
      left: '540px'
    }, 400, function () {
      $proSlides.css({
        left: '-280px'
      })
      $('#promotion_slides > .slides-container > div').last().prependTo($proSlides)
    })
  })

  $proIndicator.on('click', function (evt) {
    evt.preventDefault();

    proIdx = $(this).index()
    console.log(proIdx)
    $proIndicator.eq(proIdx - 1).addClass('on').siblings().removeClass('on')


  })

  $proPlay.on('click', function (evt) {
    evt.preventDefault();

    if ($proPlay.hasClass('paused')) {
      $proPlay.removeClass('paused')
      prointerval = setInterval(function () {
        $proNext.trigger('click')
      }, 2000)
    } else {
      $proPlay.addClass('paused')
      clearInterval(prointerval)
    }



  })

  $proDown.on('click', function (evt) {
    evt.preventDefault();

    $('#promotion_slides').slideToggle()
    $proDown.toggleClass('up')
  })
})






