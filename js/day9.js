//이벤트 함수 사용

/*

**************************1**************************
jQuery(function($)){

});//제이쿼리 함수를 먼저 만들고


**************************2**************************
$('#box').on('click',function(event)){

});//어떤 이벤트를 작성하라 라고 하면 이렇게 먼저 적고 시작하자!

*/

jQuery(function($){
	// $('#box').on('mousedown',function(event){
	// 	$(this)
	// 		.text(event.which)
	// 		.css('background-color','red'); //이런것을 체이닝이라고 한다.. 체이닝을 할 때는;(세미콜론)은 가장 마지막에만 쓴다.
	// });
	$('a').on('click',function(event){
		event.preventDefault();
		console.log('클릭!');
		//event.stopPropagation() : 이벤트가 위로 전파되는 것을 방지한다..
		//event.preventDefault() : 전송이 안되도록 막는다. 링크가 이동이 안되고.. form태그에서 입력이 안됨.
	});
	//마우스 관련 이벤트: click, mousedown, mouseup, mousemove
	//키보드 관련 이벤트: click(웹접근성..click은 키보드 마우스 둘다 적용, 한번만 적으면 된다.), keypress, keydown, keyup
	//그외 이벤트 : focus, blur, change, scroll

	$(document).on('keydown',function(event){
		console.log(event.which);
	});

//키보드로 박스 움직이기
	
/*
	$(document).on('keydown',function(event){

	내가 한것
		//console.log(event.which);
		//위 38
		//아래40
		//왼쪽37
		//오른쪽39
		var boxleft = parseInt($('#box').css('left'));
		var boxtop = parseInt($('#box').css('top'));
		if (event.which === 39){
			boxleft =+ 10;
		} else if (event.which === 37){
			boxleft =- 10;
		} else if (event.which === 38){
			boxtop =-10;
		}
	*/
	/*
		var $box = $('#box');
			// top = parseInt($box.css('top'));
			// left = parseInt($box.css('left'));
		if(event.which === 38){
			$box.css('top', '-=5px');
		} else if (event.which === 40) {
			$box.css('top','+=5px')
		} else if (event.which === 37) {
			$box.css('left','-=5px')
		} else if (event.which === 39) {
			$box.css('left','+=5px')
		}
	*/
	/*	var $box = $('#box');
		switch (event.which){
			case 27: //ESC
			 $(document).off('keydown',);
				break;
			case 37: //왼쪽
			 $box.css('left','-=5px');
				break;
			case 38: //위쪽
			 $box.css('top','-=5px');
				break;
			case 39: //오른쪽
			 $box.css('left','+=5px');
				break;
			case 40: //아래쪽
			 $box.css('top','+=5px');
				break;
		}
		if(event.which === 38){
			$box.css('top', '-=5px');
		} else if (event.which === 40) {
			$box.css('top','+=5px')
		} else if (event.which === 37) {
			$box.css('left','-=5px')
		} else if (event.which === 39) {
			$box.css('left','+=5px')
		}
	});
*/
	$(document).on('keydown.move click mousemove',function(event){
				//위에 노랑 글씨같이 css처럼 스페이스바로 한칸 띄고 다른 것을 써서 여러개를 한번에 쓸 수 있다.
		var $box = $('#box');
		switch (event.which){
			case 27: //ESC
			 $(document).off('keydown',arguments.callee);
				break;
			case 37: //왼쪽
			 $box.css('left','-=5px');
				break;
			case 38: //위쪽
			 $box.css('top','-=5px');
				break;
			case 39: //오른쪽
			 $box.css('left','+=5px');
				break;
			case 40: //아래쪽
			 $box.css('top','+=5px');
				break;
		}
	});

	//드래그앤드롭 구현
	//1. #box에서 마우스 버튼을 누를 때
	//	 -초기 위치 값을 가지고 온다.
	//	 -현재 css left, top 값을 가지고 온다.
	//	 -document에 mousemove, mouseup이벤트를 건다.
	//2. 버튼을 누른 채 마우스가 움직이면
	//	 -현재 위치값에서 초기 위치 값을 빼면 차이를 알 수 있다.
	//	 -1에서 구현한 css left, top 값에 차이만큼을 더한다.
	//3. 마우스 버튼을 때면
	//	 -document에 걸었던 mousemove, mouseup이벤트를 지운다.
	$('#box').on('mousedown', function(event){
		event.preventDefault(); //텍스트 선택이 되지 않도록 기본 동작 제거

		//현재 커서의 위치는?
		var startX = event.pageX, 
		startY = event.pageY;

		//현재 #box의 css left, top의 값은?
		var $this = $(this);
		console.log($this)
		var startLeft = parseInt($this.css('left'));
		var startTop  = parseInt($this.css('top'));
		$(document).on('mousemove.dragndrop', function(event){
			//현재 커서의 위치.. event.pageX
			var nowX = event.pageX - startX;
			var nowY= event.pageY-startY;
			$this.css('left',startLeft+nowX);
			$this.css('top',startTop+nowY);
		});
		$(document).on('mouseup.dragndrop', function(event){
			$(document).off('.dragndrop');
		});

	})
});















