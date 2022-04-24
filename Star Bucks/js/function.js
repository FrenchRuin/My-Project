$(function () {

  const $under = $('.lnb .under')
  const $lnb = $('.lnb')
  const $gnbmnu = $('.gnb > li')
  let underHeight = ['124px', '72px', '72px', '20px', '72px', '124px']


  for (let i = 0; i < $under.length; i++) {

    $under.eq(i).css({
      bottom: '-' + underHeight[i]
    })

    $gnbmnu.eq(i).on('mouseover', function () {

      $lnb.eq(i).stop().slideDown(200)
    })
    $gnbmnu.eq(i).on('mouseout', function () {

      $lnb.eq(i).slideUp(20)
    })
  }




})