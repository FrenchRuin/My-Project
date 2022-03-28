$(function () {

  const $container = $('.slides>.slides-container')
  const $list = $('.slides>nav>ul>li>a')
  const $next = $('.next')
  const $prev = $('.prev')
  let nowIdx = 0;

  $list.on('click', function (evt) {
    evt.preventDefault();
    nowIdx = $list.index(this)
    $container.stop().animate({
      left: -1130 * nowIdx
    })

    $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
  })

  $next.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx < 9) {
      nowIdx++;
    } else {
      nowIdx = 0
    }
    $container.stop().animate({
      left: -1130 * nowIdx
    })
    $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
  })

  $prev.on('click', function (evt) {
    evt.preventDefault();

    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = 9;
    }
    $container.stop().animate({
      left: -1130 * nowIdx
    })
    $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')


  })

})