$(document).ready(function () {
  // 헤더 //
  const $mnu = $(".gnb>li>a");
  const $article = $("section>article");
  let topVal = [];
  let nowIdx = 0;

  for (let i = 0; i < $article.length; i++) {
    topVal[i] = $article.eq(i).offset().top - 69;
  }

  $mnu.on("click", function (evt) {
    evt.preventDefault();

    nowIdx = $mnu.index(this);
    $("html,body").animate({
      scrollTop: topVal[nowIdx],
    });
  });

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    for (let i = 0; i < topVal.length; i++) {
      if (scrollTop >= topVal[i] - 69) {
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      } else if (scrollTop < topVal[0] - 69) {
        $mnu.parent().removeClass();
      }
    }
  });
  $('h1.logo>a', 'aside>a').on('click', function (evt) {
    evt.preventDefault();
    $('html,body').stop().animate({ scrollTop: 0 })
  })
  $(window).on('load', function () {
    $('html,body').animate({
      scrollTop: 0
    })
  })

  // 섹션2 이미지 변경 코드//

  const $frame = $("section > #travel > div .frame>img");
  const $list = $("section > #travel > div> nav > ul > li > a >img");
  let imgArr = [];

  for (let i = 0; i < $list.length; i++) {
    imgArr.push($list.eq(i).attr("src"));
  }
  $list.on("click", function (evt) {
    evt.preventDefault();
    let idxNum = $list.index(this);
    if (idxNum < 4) {
      $frame.eq(0).attr("src", imgArr[idxNum]);
    } else if (idxNum < 8) {
      $frame.eq(1).attr("src", imgArr[idxNum]);
    } else {
      $frame.eq(2).attr("src", imgArr[idxNum]);
    }
  });


  // 섹션4 이미지변경//
  const $flist = $('#food>nav>ul>li>a')
  const $fimg = $('#food>.layout>.frame>img')
  const $exp = $('#food>.explain')
  let fimgArr1 = ["./images/tos.jpg", "./images/tos2.jpg", "./images/tos3.jpg"];
  let fimgArr2 = ["./images/al.jpg", "./images/al2.jpg", "./images/al3.jpg"];
  let fimgArr3 = ["./images/kaya1.jpg", "./images/old.jpg", "./images/tea.jpg"];




  // 리팩토링 필요//
  $flist.eq(0).on('click', function (evt) {
    evt.preventDefault();
    $flist.eq(0).parent().addClass('on').siblings().removeClass('on')
    $exp.html('<p>워터 프론트에 여러 식당이 있지만 특히 한국 관광객에게 유명한 이탈리안 레스토랑.<br>바닷가 바로 앞 테라스 자리는 항상 예약이 차 있는 편이기에 일찍가서 자리를 맡아 두는 것이 좋다.<br>파스타와 해산물피자가 유명하며 가격은 현지 물가에 비해 비싼편이지만 자리값이라고 생각하면 아깝지 않다.<br>앞 바다와 노을이 바로 보이는 테라스에 앉아 로맨틱한 분위기에서 식사를 즐겨보자</p>')
    for (let i = 0; i < $fimg.length; i++) {
      $fimg.eq(i).attr('src', fimgArr1[i])
    }
  });
  $flist.eq(1).on('click', function (evt) {
    evt.preventDefault();
    $exp.html('<p>코타키나발루에서 가장 고급진 식사를 할수있는곳입니다.<br>    수트라하버마젤란 리조트 1층에 위치하고 있는 지중해식 레스토랑이에요.<br>오픈형 레스토랑이라 바다 경치도 볼 수 있어 더욱 좋습니다.</p>')
    $flist.eq(1).parent().addClass('on').siblings().removeClass('on')
    for (let i = 0; i < $fimg.length; i++) {
      $fimg.eq(i).attr('src', fimgArr2[i])
    }
  });
  $flist.eq(2).on('click', function (evt) {
    evt.preventDefault();
    $exp.html('<p><strong>카야잼</strong> -한국에서 맛볼 수 있는 카야잼보다 더 크리미하고 녹진하고 코코넛향이 풍부<br> <strong>올드타운커피</strong> - 한 봉지에 들어있는 양이 많아서 그만큼 진한 맛의 믹스커피를 느낄 수 있다. <br> <strong>사바티</strong> - 사바주에서만 나는 차인 사바티는 사람들이 많이 즐겨 먹기도 하고 향이 진하지 않고 무난하기 때문에 일상에서 즐겨 마시는 차로 적합하다. </p>')
    $flist.eq(2).parent().addClass('on').siblings().removeClass('on')
    for (let i = 0; i < $fimg.length; i++) {
      $fimg.eq(i).attr('src', fimgArr3[i])
    }
  });








});





