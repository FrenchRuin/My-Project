$(function () {


  // 슬라이드
  const $container = $('section>.slides>.slides-container')
  const $order = $('section>.slides>.order>ul>li>a')
  const $btnNext = $('.next')
  const $btnPrev = $('.prev')

  let nowIdx = 0;

  $order.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $order.index(this)
    $order.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')


    $container.stop().animate({
      left: -100 * (nowIdx + 3) + '%'
    })
  })

  $btnNext.on('click', function () {

    if (nowIdx < 3) {
      nowIdx++;
    } else {
      nowIdx = 0
    }
    $order.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

    $container.stop().animate({
      left: '-500%'
    }, 400, function () {
      $('section>.slides>.slides-container>p').first().appendTo($container)
      $container.css({ left: '-400%' })
    })

  })

  $btnPrev.on('click', function () {

    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 3
    }
    $order.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

    $container.stop().animate({
      left: '-300%'
    }, 400, function () {
      $('section>.slides>.slides-container>p').last().prependTo($container)
      $container.css({ left: '-400%' })
    })
  })
})