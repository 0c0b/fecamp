//돔 조작을 쉽게 해주는 라이브러리..

//$(); //이런식으로 축약형으로 쓸 수 있다
		//$는 다양하게 많이 쓰인다..
jQuery.noConflict(); //이것을 쓰면 이 다음 부터는 $를 쓸 수 없다.
//jQuery(function($)/*이거를 쓰면 안쪽에 $를 마음대로 쓸 수 있다.*/{
	/*또 이렇게 쓰면 .... 스크립트 파일에 위치에 상관 없이 엘리먼트를 선택할 수 있다.*/
});

jQuery(function($){
	var $box = $('#box') //변수 이름앞에 $를 붙이는 이유는 제이쿼리 인수? 이기 때문 
	//var $width = 100; 이런건 쓰지 않는다.
	//$('#box').css('left', '20px').show(); 체이닝
//수업시간에 안한 방식
	// var listener1 = function(event){
	// 	console.log('click');		
	// }
	// var listener2 = function(event){
	// 	console.log('click2');		
	// }
	// $(document)
	// 	.on('click',listener1)
	// 	.on('click',listener2)
	// $(document).off('click',listener2); //리스너2만 멈추게한다.
		//또 다른 방식.. 네임스페이스방식
		// $(document)
		// 	.on('click.ns1',listener1)
		// 	.on('click.ns2',listener2)
		// $(document).off('.ns1'); //리스너1만 멈추게 한다.
	//위의 변수로 해서 적은 코드는 아래처럼 쓸 수도 있다. 
	// $(document).on('click',function(event){
	// 	console.log('click');
	// })
	// .on('click', function(event){
	// 	console.log('click2')
	// });
	

//이벤트 전파
	$('code, p, body').on('click', function(event){
		console.log(this);
	});
	$('p').on('click' , 'code'/*제일 처음안에 있는 code만? 실행*/, function(event){
		console.log(this);
	});
//전파가 되는 특성을 이용  ... 전파의 방향은 부모쪽으로 그러니까 상위로..
	$('ul').on('click','li', function(event){
		var $this = $(this);
		$this.clone().appendTo($this.parent()); //목록에 하나 추가하는 거구나...

		//event.stopPropagation(); //이벤트 전파를 막는다.
	});
//브라우저에서 제공하는 이벤트
	$(window).on('scroll',function(event){
		console.log('scroll')
	});
//사용자가 하지 않았는데 저절로 실행되게하는 trigger
	$(window).trigger('scroll');


//없는 이벤트를 만들 수도 있다.
	$(window).on('내이벤트',function(event){
		console.log('내이벤트')
	});
	$(window).trigger('내이벤트');


//버튼 누르면 보이고 숨기고 토글되는 이벤트
	$('#show').on('click', function(event){
		$('#box').show(1000/*작동되는시간*/,'linear',function(){
			console.log('보임');
		});
	});

	$('#hide').on('click', function(event){
		$('#box').hide();
	});

	$('#toggle').on('click', function(event){
		$('#box').toggle();
	});


//애니메이트로 내가 변하는 모양을 설정할 수 있다 ... 중간의 값을 연속적으로 변경할 수 있는 설정이면 사용할 수 있다.
	$('#show').on('click', function(event){
		$('#box').animate({
			width: width,
			opacity:1;
		}, 5000);
	});
	$('#hide').on('click', function(event){
		$('#box').delay(1000).animate({
			width: 0,
			opacity: 0;
		}, 5000);
	});
	$('#toggle').on('click', function(event){
		$('#box').finish();
	});


//css 넣기
	var $box = $('box');
	$box.css({
		background: 'red';
	});

//top 버튼 누르면 스크롤을 상단으로보내기
	$('.top').on('click', function(event){
		event.preventDefault();
		$(window).scrollTop(0);
	});


	$('body').children(); //선택자의 자식을 선택.. 자손말고
	$('#ff').parent().end();//end는 선택이 변경되는 메소드를 제일 마지막거 이전으로 돌아감 ..

$('#aa').attr('id', bb) //attr은 엘리먼트의 속성을 가져오서나 , bb처럼 설정할 수 있다..
$('#aa').appendTo($('#aa').parent());//원래 위치에서 빠져서 새로 추가하라고 하는곳으로 이동한다.
$('#aa').clone().appendTo($('#aa').parent());//복사를 하고 싶으면 clone을 한다. 
});
