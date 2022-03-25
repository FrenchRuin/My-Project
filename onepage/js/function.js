$(document).ready(function () {

  const $mnu = $('ul>li>a')
  const $logo = $('.logo>a')
  const $article = $('article')
  const $arrow = $('aside>a')

  arrTopVal = [];

  for (let i = 0; i < $mnu.length; i++) {
    arrTopVal.push($article.eq(i).offset().top - 69)
  }

  const pageMove = function (topVal) {
    $('html,body').animate({
      scrollTop: topVal
    })
  }

  $mnu.on('click', function (evt) {
    evt.preventDefault();
    const nowIdx = $mnu.index(this);
    pageMove(arrTopVal[nowIdx])
  })


  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    for (let i = 0; i < $mnu.length; i++) {
      if (scrollTop >= arrTopVal[i]) {
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on')
      }
    }
  })


  $logo.on('click', function () {
    pageMove(0);
  })
  $arrow.on('click', function () {
    pageMove(0);
  })




})