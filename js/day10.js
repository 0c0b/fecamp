jQuery(function($){
	//****************************trigger 이벤트 예제****************************
	$('li').on('click',function(event){
		$(this).clone().insertAfter(this);
	});
	$('#cloneItem').on('click', function(event){
		$('li:first').trigger('click');
	});
	$('ul').on('click', 'li', function(event){
		$(this).clone().insertAfter(this);
	});


	//****************************박스 숨기기 예제****************************
	$('#hide').on('click', function(event){
		$('#box').delay(1000).animate({'opacity':0,'width':0}, 300);
		//$('#box').fadeOut([300]).slideDown([300]);//애니메이션을 여러개를 동시에 쓰면 쌓인다. 처음것을 실행한 다음 바로 다음거를 실행한다.
		//$('#box').hide([300]);
	});
	$('#show').on('click', function(event){
		$('#box').fadeIn([300]);
		//$('#box').show([300]);
	});
	$('#toggle').on('click', function(event){
		$('#box').stop().fadeToggle([300]);
		//$('#box').toggle([300]);
	});



//****************************키보드를 누르면 박스가 움직인다. 애니메이션으로 ****************************
	// $(document).on('keydown', function(event){
	// 	var $box = $('#box');
	// 	var offset = $box.offset(), left = offset.left, top = offset.top;
	// 		switch (event.which){
	// 			case 37: //왼쪽
	// 				$box.stop().animate({'left':'-=100px'}, 300);
	// 				break;
	// 			case 38: //위쪽
	// 				$box.stop().animate({'top':'-=100px'}, 300);
	// 				break;
	// 			case 39: //오른쪽
	// 				$box.stop().animate({'left':'+=100px'}, 300);
	// 				break;
	// 			case 40: //아래쪽
	// 				$box.stop().animate({'top':'+=100px'}, 300);
	// 				break;
	// 		}
	// });	


//****************************키보드를 누르면 박스가 움직인다. 애니메이션으로 ****************************
	$(document).on('keydown', function(event){
		var $box = $('#box');
		var windowW = $(window).width();
		//var h2H = h2Offset.height();
		//내가 했던것 ...
		// var startLeft = parseInt($box.css('left'));
		// var startTop  = parseInt($box.css('top'));
		//console.log(startTop, startLeft);
		var offset = $box.offset(), left = offset.left, top = offset.top;
		var h2offset = $('h2:first').offset(), h2top = h2offset.top;
			switch (event.which){
				case 37: //왼쪽
					if (left - 20 < 0){
						left = 0;
					} else {
						left = left - 20;
					};
					$box.stop().animate({'left': left}, 50);
					break;
				case 38: //위쪽
					if (top - 20 < 0){
						top = 0;
					} else {
						top = top - 20;
					};
					$box.stop().animate({'top': top}, 50);
					break;
				case 39: //오른쪽
				//박스 오른쪽 모서리의 위치 (left+50)
				//박스 아래 모서리 위치 (top-50)
					if (left+50 > windowW){
						left = windowW;
					} else {
						left = left +20;
					};
						//event.preventDefault();
					$box.stop().animate({'left': left}, 50);
					break;
					case 40: //아래쪽
					if (top+50 > h2top){
						top = h2top;
					} else {
						top = top + 50;
						//event.preventDefault();
					};
					$box.stop().animate({'top': top}, 50);
					break;
			};
			//박스의 위치
			//애니메이션이 시작하기 전에... 범위 계산이 끝나야 한다.
			//박스의 위치가 윈도우보다 넘어가지 않게
			//if ()

			$('.top').on('click', function(event){
				event.preventDefault();
				//$(window).scrollTop(0);
				$('html,body').animate({'scrollTop': 0}, 500);
			});
	});	




	//창 범위를 넘어가지 않게 하기 실습을 위한 설명...
		/*	$('h2').on('click', function(event){
				$(this).toggleClass('header');

				//console.log( $(this))
			});*/

	//inner는 패딩까지 잡아낸다...
	//$(window). height()  //현재 윈도우(창)의 높이
	//$(document). height() //내용물의 높이 ... 윈도우의 높이보다 높을 수 있음 ..  스크롤이 생기는 이유

	//애니메이션을 쓸 때는 오프셋을 사용한다. 

	//첫번째 h2 만 고르기.. $('h2:first') 제이쿼리에서만 쓰인다..
	//$('h2:first').offset(); 첫번째 h2의 위치를 알 수 있다..



});
//똑같은 코드는 가능하면 반복하지 않는 것이 좋다.