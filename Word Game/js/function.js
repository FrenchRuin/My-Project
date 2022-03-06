window.addEventListener('DOMContentLoaded', function () {

  let answer = 'sadfg';

  const $input = document.querySelectorAll('input')
  const $btn = document.querySelector('button')

  $btn.addEventListener('click', function () {


    for (let i = 0; i < 5; i++) {

      if ($input[i].value == answer[i]) {
        $input[i].style.backgroundColor = 'green';

      } else if (answer.includes($input[i].value)) {
        $input[i].style.backgroundColor = 'yellow';
      } else {
        $input[i].style.backgroundColor = 'lightgrey';
      }
    }
    let temp = '<div style="text-align:center"><input><input><input><input><input><button>제출</button></div>';
    document.querySelector('body').insertAdjacentHTML('beforeend', temp);
  })


})