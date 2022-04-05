$(function () {


  let idx = 0;


  const $gnb = $('header > nav > .gnb > li> a')
  const $lnb = $('header > nav > .gnb > li > .lnb')
  const $search = $('.search')

  console.log($gnb.length)
  console.log($lnb.length)
  $gnb.on('mouseenter', function () {
    idx = $gnb.index(this)

    $('.gnb').css({ borderBottom: 'none' })
    $gnb.not().css({ color: '#ddd' })
    $gnb.eq(idx).css({ color: '#000' })
    $lnb.not().css({ display: 'none' })
    $lnb.eq(idx).css({ display: 'block' })
    $('.shadow').css({ display: 'block' })
  })

  $('nav').on('mouseleave', function () {
    $lnb.css({ display: 'none' })
    $gnb.css({ color: '#000' })
    $('.gnb').css({ borderBottom: '1px solid #000' })
    $('.shadow').css({ display: 'none' })
  })

  $search.on('click', function () {
    $('.search-box').slideDown()
  })

})