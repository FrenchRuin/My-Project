$(function () {

  const $gnb = $('header > nav ');
  const $lnb = $('header > nav > .gnb > li > .lnb ')
  const $lnb_bg = $('.lnb_bg')

  const $all_menu = $('.all-menu')
  const $mnuBtn = $('.menu_btn')
  const $mnuBtnClose = $('.menu_btn_close')

  $gnb.on('mouseover', function () {
    $lnb.slideDown(300);
    $lnb_bg.slideDown(300);
  })
  $gnb.on('mouseleave', function () {
    $lnb.slideUp(300);
    $lnb_bg.slideUp(300);
  })

  $mnuBtn.on('click', function (evt) {
    evt.preventDefault();

    $all_menu.slideDown(100, 'linear');
  });

  $mnuBtnClose.on('click', function (evt) {
    evt.preventDefault();
    $all_menu.slideUp(100, 'linear');
  })

  // 숫자 증가 애니메이션
  let appNum = 2471862;
  let storeNum = 1470;
  let timeNum = 8;
  $({ val: 0 }).animate({ val: timeNum }, {
    duration: 2000,
    step: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".status>div:nth-child(1) span").text(num);
    },
    complete: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".status>div:nth-child(1) span").text(num);
    }
  });

  $({ val: 0 }).animate({ val: storeNum }, {
    duration: 2400,
    step: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".status>div:nth-child(2) span").text(num);
    },
    complete: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".status>div:nth-child(2) span").text(num);
    }
  });

  $({ val: 0 }).animate({ val: appNum }, {
    duration: 2800,
    step: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".status>div:nth-child(3) span").text(num);
    },
    complete: function () {
      var num = numberWithCommas(Math.floor(this.val));
      $(".status>div:nth-child(3) span").text(num);
    }
  });
  //숫자 콤마
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 스크롤 내리면 네비게이션 색 바 변경
  let $headerChangeTopVal = $('header').offset().top + 40
  $(window).on('scroll', function () {
    let scrolled = $(window).scrollTop() >= $headerChangeTopVal
    $('header').toggleClass('down', scrolled)
  })

  //슬라이드 
  const $slides = $('#slides>.slides>.slides-container')
  const $nextBtn = $('.next')
  const $prevBtn = $('.prev')
  let nowIdx = 0;

  $nextBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 3) {
      nowIdx++;
    } else {
      nowIdx = 0
    }

    $slides.stop().animate({
      left: '-200%'
    }, 400, function () {
      $('#slides>.slides>.slides-container>p').first().appendTo($slides);
      $slides.css({
        left: '-100%'
      })
    })

  })
  $prevBtn.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 3
    }

    $slides.stop().animate({
      left: '0'
    }, 400, function () {
      $('#slides>.slides>.slides-container>p').last().prependTo($slides);
      $slides.css({
        left: '-100%'
      })
    })

  })

})