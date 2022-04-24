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
  const $indicator = $('.indicator>a')

  const $words = $container.find('.words')

  const $more = $container.find('.more')

  let nowIdx = 0;


  let voids = function () {
    if ($words.eq(nowIdx).hasClass('on')) {
      $words.eq(nowIdx).removeClass('on')
      $more.eq(nowIdx).removeClass('on')
      void $words.offsetWidth;
      $words.eq(nowIdx).addClass('on')
      $more.eq(nowIdx).addClass('on')
    } else {
      $words.eq(nowIdx).addClass('on')
      $more.eq(nowIdx).addClass('on')
    }

  }

  $btnNext.on('click', function (evt) {
    evt.preventDefault();



    if (nowIdx < 4) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }



    $container.stop().animate({
      left: '-100%'
    }, 400, function () {
      $('.slides>.slides-container>div').first().appendTo($container);
      $container.css({ left: 0 })
    })

    $indicator.children('p').text('No.0' + (nowIdx + 1))
    voids();

  })
  $btnPrev.on('click', function (evt) {
    evt.preventDefault();



    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 4;
    }

    $container.stop().animate({
      left: '100%'
    }, 400, function () {
      $('.slides>.slides-container>div').last().prependTo($container);
      $container.css({ left: 0 })
    }

    )
    $indicator.children('p').text('No.0' + (nowIdx + 1))
  })
  $('.indicator>a').on('click', function (evt) {
    evt.preventDefault();
    $btnNext.trigger('click')
    $(this).children('p').text('No.0' + (nowIdx + 1))

  })

  //제품 슬라이드 

  const $mainSlides = $('#main-product > .slides-main > .main-slides-container')
  const $subSlides = $('#main-product > .slides-sub > .sub-slides-container')



  const $proSlidesBtn = $('body #wrap section #main-product > .pro-next')

  let proIdx = 0;
  $proSlidesBtn.on('click', function (evt) {
    evt.preventDefault();



    if (proIdx < 3) {
      proIdx++
    } else {
      proIdx = 0
    }

    $subSlides.children('div').eq(1).addClass('on').siblings().removeClass('on')

    $mainSlides.stop().animate({
      left: '-950px'
    }, 400, function () {
      $('.slides-main > .main-slides-container > p').first().appendTo($mainSlides);
      $mainSlides.css({
        left: 0
      })
    })

    $subSlides.stop().animate({
      left: '-620px'
    }, 400, function () {
      $('.slides-sub > .sub-slides-container > div').first().appendTo($subSlides);
      $subSlides.css({
        left: 0
      })
    })

  })





  $('.ad>span').css({
    marginLeft: -$('.ad>span').width() / 2
  })
  $('.ad>.more').css({
    marginLeft: -$('.ad>.more').width() / 2
  })

  $('.help>h2').css({
    marginTop: -$('.help>h2').height() / 2
  })

  //푸터 sony Family

  const $site = $('footer .site > ul > li ')
  const $subSite = $('footer .site > ul > li > ol')

  $site.on(' click', function (evt) {
    evt.preventDefault();

    $subSite.show();
  })

  $subSite.on('mouseleave', function () {
    $subSite.hide();
  })
  // $site.on('mouseout', function (evt) {
  //   evt.preventDefault();

  //   $subSite.hide();
  // })


})