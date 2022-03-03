
window.addEventListener('DOMContentLoaded', function () {


  const $gnb = document.querySelectorAll('header>nav a');
  const $frame = document.querySelector('section>.frame>img');
  const $bar = document.querySelectorAll('section>.bar>li>a>img');
  const $thmbs = document.querySelectorAll('section>.bar>li>a')

  const Pjpg = ["./images/people1.jpg", "./images/people2.jpg", "./images/people3.jpg", "./images/people4.jpg", "./images/people5.jpg"]

  const Njpg = ["./images/nature1.jpg", "./images/nature2.jpg", "./images/nature3.jpg", "./images/nature4.jpg", "./images/nature5.jpg"]

  const Fijpg = ["./images/film1.jpg", "./images/film2.jpg", "./images/film3.jpg", "./images/film4.jpg", "./images/film5.jpg"]

  const Fojpg = ["./images/food1.jpg", "./images/food2.jpg", "./images/food3.jpg", "./images/food4.jpg", "./images/food5.jpg"]

  $thmbs.forEach(function ($thmb, idx) {
    $thmb.addEventListener('click', function (evt) {
      evt.preventDefault();
      let ImgSrc = $bar[idx].getAttribute('src');
      $frame.setAttribute('src', ImgSrc);
    })
  })

  $gnb[0].addEventListener('click', function (evt) {
    evt.preventDefault();
    $frame.setAttribute('src', "./images/people1.jpg");

    $bar[0].setAttribute('src', Pjpg[0]);
    $bar[1].setAttribute('src', Pjpg[1]);
    $bar[2].setAttribute('src', Pjpg[2]);
    $bar[3].setAttribute('src', Pjpg[3]);
    $bar[4].setAttribute('src', Pjpg[4]);




  })
  $gnb[1].addEventListener('click', function (evt) {
    evt.preventDefault();
    $frame.setAttribute('src', "./images/nature1.jpg");

    $bar[0].setAttribute('src', Njpg[0]);
    $bar[1].setAttribute('src', Njpg[1]);
    $bar[2].setAttribute('src', Njpg[2]);
    $bar[3].setAttribute('src', Njpg[3]);
    $bar[4].setAttribute('src', Njpg[4]);
  })
  $gnb[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    $frame.setAttribute('src', "./images/film1.jpg");

    $bar[0].setAttribute('src', Fijpg[0]);
    $bar[1].setAttribute('src', Fijpg[1]);
    $bar[2].setAttribute('src', Fijpg[2]);
    $bar[3].setAttribute('src', Fijpg[3]);
    $bar[4].setAttribute('src', Fijpg[4]);
  })
  $gnb[3].addEventListener('click', function (evt) {
    evt.preventDefault();
    $frame.setAttribute('src', "./images/food1.jpg");

    $bar[0].setAttribute('src', Fojpg[0]);
    $bar[1].setAttribute('src', Fojpg[1]);
    $bar[2].setAttribute('src', Fojpg[2]);
    $bar[3].setAttribute('src', Fojpg[3]);
    $bar[4].setAttribute('src', Fojpg[4]);
  })

  // $thmbs.forEach(function ($thmb, idx) {
  //   $thmb[idx].addEventListener('click', function (evt) {
  //     evt.preventDefault();
  //     let ImgSrc = $bar.getAttribute('src');
  //     $frame.setAttribute('src', ImgSrc);



})





























