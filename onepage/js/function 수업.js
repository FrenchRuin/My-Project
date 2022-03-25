$(document).ready(function () {

  const $mnu = $('header > nav > .gnb > li > a');

  const arrTopVal = [];
  let nowIdx = null;

  //각 article의 offset().top 배열에 저장
  for (let i = 0; i < $mnu.length; i++) {
    arrTopVal[i] = $('article').eq(i).offset().top;
  }

  console.log('arrTopVal =', arrTopVal);

  //네비게이션 메뉴에 대한 클릭이벤트 구문
  $mnu.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $mnu.index(this);



    $('html,body').stop().animate({
      scrollTop: arrTopVal[nowIdx] - 69
    }, 400)
  });

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    for (let i = 0; i < arrTopVal.length; i++) {
      if (scrollTop >= arrTopVal[i] - 69) {
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on')
      } else if (scrollTop < arrTopVal[0] - 69) {
        $mnu.parent().removeClass();
      }
    }
    const view = (scrollTop + $(this).height()) - $('footer').offset().top
    if (view > 0) {
      $('aside').css({ marginBottom: view });

    } else {
      $('aside').css({ marginBottom: 0 });
    }

  })

  $('.logo>a, aside>a').on('click', function (evt) {
    evt.preventDefault();
    $('html,body').stop().animate({
      scrollTop: 0
    })
  })

  $(window).on('load', function () {
    $('html,body').animate({
      scrollTop: 0
    })
  })



});


