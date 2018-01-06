
$(document).ready(function () {
	/*-- click test variant -*/
	$('.test__item').on('click', function () {
		$(this).closest('.test')
			.addClass('has-checked')
			.find('.test__item').removeClass('is-active');

		$(this).addClass('is-active');

	});

	var $itmIndex = 1;
	/*- click btn to next text-*/
	$('.btn-go-next').on('click', function () {
		var thisTest = $(this).closest('.test');
		// var nextTest = thisTest.next('.test');
		var hasChacked = thisTest.hasClass('has-checked');
		var getCheckedAnswer = thisTest.find('.is-active').data('answer');

		var answerNum = getAnwswerData(getCheckedAnswer);
		var nextTest = $('.test-' + answerNum);

		var $this = $(this);
		var $index = thisTest.find('.test__btn').index($this) + $itmIndex;


		if(hasChacked){
			$itmIndex++;
			$('.slider__item').eq($index).addClass('is-active-' + $index );
			$('.slider__line').addClass('is-active-' + $index );
			/* -- move line -*/
			thisTest.hide();
			nextTest.show();
			return true;
		} else {
			thisTest.find('.test__item').addClass('animateAnsver');
			setTimeout(function () {
				$('.animateAnsver').removeClass('animateAnsver');
			}, 1000);
			return false;
		}
	});

	/*- click btn-result -*/

		$('.btn-result').on('click', function () {
			var thisTest = $(this).closest('.test');
			var hasChacked = thisTest.hasClass('has-checked');

			var getCheckedAnswer = thisTest.find('.is-active').data('answer');
			var answerNum = getAnwswerData(getCheckedAnswer);
			var resultTest = $('.result-' + answerNum);

			$('.test__result').slideUp(600);

			if(hasChacked){
				thisTest.find(resultTest).slideDown('1000');
				setTimeout(function () {
					var $top = thisTest.find(resultTest).offset().top;
					$('body, html').animate({scrollTop : ($top - 100)}, 600);
				}, 600);
			} else {
				thisTest.find('.test__item').addClass('animateAnsver');
				setTimeout(function () {
					$('.animateAnsver').removeClass('animateAnsver');
				}, 1000);
				return false;
			}

		});


	// /* ----- slider click or back test ------ */
	// 	$('.slider__item').on('click', function () {
	// 		var $index = $('.slider__item').index($(this));

	// 		for (var i = $('.slider__item').length - 1; i >= $index; i--) {
	// 			$('.slider__item').eq(i).removeClass('is-active-1 is-active-2');
	// 			$('.slider__line').eq(i).removeClass('is-active-1 is-active-2');
	// 		}


	// 	});



}); /*- end doc ready-*/

function getAnwswerData(a) {
	switch (a) {
		case 1:
			return 1;
			break;
		case 2:
			return 2;
			break;
		case 3:
			return 3;
			break;
		case 4:
			return 4;
			break;
		case 11:
			return 11;
			break;
		case 111:
			return 111;
			break;
		case 12:
			return 12;
			break;
		case 121:
			return 121;
			break;
		case 122:
			return 122;
			break;
		case 2:
			return 2;
			break;
		case 21:
			return 21;
			break;
		case 211:
			return 211;
			break;
		case 22:
			return 22;
			break;
		case 221:
			return 221;
			break;
		case 222:
			return 222;
			break;
		case 223:
			return 223;
			break;
		case 3:
			return 3;
			break;
		case 31:
			return 31;
			break;
		case 311:
			return 311;
			break;
		case 312:
			return 312;
			break;
		case 313:
			return 313;
			break;
		case 314:
			return 314;
			break;
		case 4:
			return 4;
			break;
		case 41:
			return 41;
			break;
		case 411:
			return 411;
			break;
		default:
			break;
	}
}

