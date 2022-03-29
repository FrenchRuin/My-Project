$(function () {

  // 헤더부분
  const $mnu = $('header>.gnb>ul>li>a')
  const $article = $('section>article')

  let topVal = [];
  let nowIdx = 0;
  // article 높이 topval 입력
  for (let i = 0; i < $article.length; i++) {
    topVal.push($article.eq(i).offset().top - 70)
  }

  $mnu.on('click', function (evt) {
    evt.preventDefault();

    nowIdx = $mnu.index(this);
    $('html,body').animate({
      scrollTop: topVal[nowIdx]
    })
  })


  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    for (let i = 0; i < topVal.length; i++) {
      if (scrollTop >= topVal[i] - 70) {
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on')
      } else if (
        scrollTop < topVal[0]
      ) {
        $mnu.parent().removeClass()
      }
    }
    const view = (scrollTop + $(this).height()) - $('footer').offset().top
    if (view > 0) {
      $('aside').css({ marginBottom: view });

    } else {
      $('aside').css({ marginBottom: 0 });
    }


  })

  // 로고 새로고침
  $('header>.logo>a').on('click', function (evt) {
    evt.preventDefault();

    $('html,body').animate({
      scrollTop: 0
    })
  })

  $(window).on('load', function () {
    $('html,body').animate({
      scrollTop: 0
    })
  })
  // 어사이드//
  const $arrow = $('aside>a>i')

  $arrow.on('click', function (evt) {
    evt.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    })
  })




  // 섹션 2 travel
  const $lnb = $('#travel>.lnb>ul>li>a')
  const $pic = $('#travel>.pic>.frame>img')
  const $exp = $('#travel>.explain>p')

  const mungImg = ['./images/mung.jpg', './images/mung2.jpg', './images/mung3.jpg', './images/mung4.jpg']
  const tanImg = ['./images/tan.jpg', './images/tan1.jpg', './images/tan2.jpg', './images/tan4.jpg']
  const masImg = ['./images/sava.jpg', './images/sava2.jpg', './images/sava3.jpg', './images/sava4.jpg']

  const exp = ['<p>멍알룸 섬은 코타키나발루에서 북서쪽으로 56km 떨어진 곳에 위치하고 있습니다. <br>멍알룸 섬은 가장 원시적인 모습을 간직하고 있는 열대의 천국과 같은 섬입니다.</p>', '<p>코타키나발루 서쪽에 위치한 탄중아루 비치는 현지인이나 관광객이게 가장 인기 있는 지역 랜드마크 중 하나입니다.</p>', '코타키나발루의 사바 주립 모스크는 하얀색 건물에 파란색 돔이  시원시원한 느낌을 주는 이슬람 사원이다. ']

  $lnb.on('click', function (evt) {
    evt.preventDefault();
    $(this).parent().addClass('on').siblings().removeClass('on')
  })
  $lnb.eq(0).on('click', function () {
    for (let i = 0; i < $pic.length; i++) {
      $pic.eq(i).attr('src', mungImg[i])
    }
    $exp.html(exp[0])
  })
  $lnb.eq(1).on('click', function () {
    for (let i = 0; i < $pic.length; i++) {
      $pic.eq(i).attr('src', tanImg[i])
    }
    $exp.html(exp[1])
  })
  $lnb.eq(2).on('click', function () {
    for (let i = 0; i < $pic.length; i++) {
      $pic.eq(i).attr('src', masImg[i])
    }
    $exp.html(exp[2])
  })


  // 섹션 4 food

  const $fmnu = $('#food>nav>ul>li>a')
  const $fimg = $('#food>.pic>.frame>img')

  const tosimg = ['./images/tos.jpg', './images/tos2.jpg', './images/tos5.jpg']
  const alimg = ['./images/al.jpg', './images/al2.jpg', './images/al3.jpg']
  const soimg = ['./images/tea.jpg', './images/old.jpg', './images/kaya1.jpg']

  $fmnu.on('click', function (evt) {
    evt.preventDefault();
    $(this).parent().addClass('on').siblings().removeClass('on')
  })

  $fmnu.eq(0).on('click', function () {
    for (let i = 0; i < $fimg.length; i++) {
      $fimg.eq(i).attr('src', tosimg[i])
    }
  })
  $fmnu.eq(1).on('click', function () {
    for (let i = 0; i < $fimg.length; i++) {
      $fimg.eq(i).attr('src', alimg[i])
    }
  })
  $fmnu.eq(2).on('click', function () {
    for (let i = 0; i < $fimg.length; i++) {
      $fimg.eq(i).attr('src', soimg[i])
    }
  })



})
