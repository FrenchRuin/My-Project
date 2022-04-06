$(function () {


  // 네비게이션

  let idx = 0;


  const $gnb = $('header > nav > .gnb > li> a')
  const $lnb = $('header > nav > .gnb > li > .lnb')
  const $search = $('.search')

  console.log($gnb.length)
  console.log($lnb.length)
  if ($('html,body').scrollTop() == 40) {
    $('article').css({ display: 'none' })

  }
  $gnb.on('mouseenter', function () {
    idx = $gnb.index(this)

    $('.gnb').css({ borderBottom: 'none' })
    $gnb.not().css({ color: '#ddd' })
    $gnb.eq(idx).css({ color: '#000' })
    $lnb.not().fadeOut(100)
    $lnb.eq(idx).fadeIn(300)
    $('.shadow').css({ display: 'block' })
  })

  $('nav').on('mouseleave', function () {
    $lnb.css({ display: 'none' })
    $gnb.css({ color: '#000' })
    $('.gnb').css({ borderBottom: '1px solid #000' })
    $('.shadow').fadeOut(100)
  })

  $search.on('click', function () {

    if ($search.hasClass('close')) {
      $search.removeClass('close')
      $('.search-box').slideUp()
      $('.shadow').css({ display: 'none' })
    } else {
      $search.addClass('close')
      $('.search-box').slideDown()
      $('.shadow').css({ display: 'block' })
    }
  })


  // 그림자

  // let shadowWidth = $('article').width();
  // $('.shadow').css({
  //   // width: shadowWidth
  // })

  // 알림창
  $('section > .notice > a').on('click', function (evt) {
    evt.preventDefault();

    $('section > .notice').slideUp(300);
  })



  // 슬라이드

  const $container = $('#exhibit > .slides > .slides-container')
  const $next = $('#exhibit > .slides > .next')


  let nowNum = 0;

  $next.on('click', function (evt) {
    evt.preventDefault();



    if (nowNum < 2) {
      nowNum++;
    } else {
      nowNum = 0
    }
    $container.stop().animate({
      left: -300 * nowNum
    })
  })




  $('aside > a > i').on('click', function (evt) {
    evt.preventDefault();

    $('html,body').animate({
      scrollTop: 0
    })
  })





})


