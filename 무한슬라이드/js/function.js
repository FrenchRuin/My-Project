
$(function () {

	const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');

	const $btnAuto = $('.btn_auto');


	let intervalKey = null;

	let nowIdx = 0; //인디케이터 기준으로 0~4

	$indicator.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $indicator.index(this);

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너이동
		$container.stop().animate({
			left: -(100 * (nowIdx + 5)) + "%"
		});
	});

	$btnPrev.on('click', function (evt) {
		evt.preventDefault();


		// nowIdx 값 추출 0~4 정수
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 4
		}
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

		// 컨테이너 이동

		$container.stop().animate({
			left: "-400%"
		}, 400, function () {
			// 맨 뒤의 한장을 컨테이너의 맨앞으로 이동
			$('.slides > .slides-container > p').last().prependTo($container);
			$container.css({ left: '-500%' })
		})


	})

	$btnNext.on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx < 4) {
			nowIdx++;
		} else {
			nowIdx = 0
		}
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

		$container.stop().animate({
			left: '-600%'
		}, 400, function () {
			// 맨앞에 한장을 컨테이너의 맨뒤로 appendTo
			$('.slides > .slides-container > p').first().appendTo($container);
			$container.css({ left: '-500%' })
		})
	})

	// 자동실행
	$btnAuto.on('click', function () {
		if ($(this).hasClass('pause')) {
			$(this).removeClass('pause')
			clearInterval(intervalKey)

		} else {
			$(this).addClass('pause')
			intervalKey = setInterval(function () {
				$btnNext.trigger('click') //이벤트 강제발생
			}, 2000)
		}

	})
})

























