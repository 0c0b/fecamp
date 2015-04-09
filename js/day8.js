var str1 = 'A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.';
var str2 = '국내지점 서울/인천/경기 공항 지점. 인천지점. 지도보기. 주소, 인천광역시 남동구 미래로 49 제일은혜빌딩 2층. 연락처, TEL : 1588-8000. FAX : 032-437-0367.';
var str3 = '<h1>블리자드 엔터테인먼트: 연락처</h1><p>(한국) 대표 번호: 1644-0727</p><p>US Account & Billing: 1-800-592-5499</p><p>Australia Account & Billing: 1-800-041-378</p><p>Singapore Account & Billing: 1-800-2549-9273</p><p>Mexico Account & Billing: 001-888-578-7628</p><p>Argentina Account & Billing: 0800-333-0778</p><p>Chile Account & Billing: 1230-020-5554</p><p>Technical Support: 1-949-955-1382</p>';

/*정규표현식...
//var regex = new RegExp('syntax'); //신택스라는 패턴을 만들었다.
var regex = new RegExp('syntax');
console.log(regex.test(str1)); //str1문자열을 찾겠다.. 
test : 입력한 값을 검사할때 test를 쓴다. 올바르면 true, 아니면 거짓......
exec : 입력한 값을 찾아낼때..
*/


//var regex = new RegExp('o[rf]'); //o와 같이 있는 r 또는 f
var regex = new RegExp('o[^ntur]'); //^가 있으면 rf를 제외한 나머지를 전부 찾는다..
console.log(regex.exec(str1));  //일치하는부분을 찾아 []배열 처럼 표시해준다...

var regex = new RegExp('o[a-zA-Z]'); //o로 시작하는? 같이 있는? a부터 z다 찾는다... 
console.log(regex.exec(str1));  //일치하는부분을 찾아 []배열 처럼 표시해준다...

var regex = new RegExp('[0-9]'); //o로 시작하는? 같이 있는? a부터 z다 찾는다... 
console.log(regex.exec(str3)); 

var regex = new RegExp('<h[1-6]>');//<h1>~<h6>까지 찾는다.. 
console.log(regex.exec(str3));  

var regex = new RegExp('[0-9]{4}-[0-9]{4}'); //{}수량자... 이거는 [0-9][0-9][0-9][0-9]이렇게 쓴것과 같다 ..
console.log(regex.exec(str3));  

//주민번호 찾기... var regex = /[0-9]{2}[01][0-9]{3}-[1-4][0-9]{6}/;
							 // 년      월           성별
//주민번호 찾기 간단 버전... var regex = /\d{2}[01]\d{3}-[1-4]\d{6}/;  //[0-9]는 \d 로 바꿀 수 있다..

//var regex = /<\/p>/; // /이거를 쓰면 거기서 끝난다고 인식한다.. 그래서 이스케이프문자를 써줘야한다...
var regex = /<\/{0,1}p>/;  //{0,1}패턴이 0번이상 1번이하 반복된 것.. 그러니까 있거나 없는것..
//regexr.com에서 연습할 수 있다..



//  /^[\+\-\_a-z\.0-9]+@[a-z]+\.[a-z]+$/g  //유효한 이메일인지 확인하는것....  $문자로 끝나는것... 띄어쓰기로 끝나면 선택안됨..


var regex = /([\d\-]+)\d+/g; //숫자로된 전화번호를 찾는다..
//console.log(str3.replace(regex,'전화번호')); //숫자로 된 전화번호를 '전화번호'문자로 바꾼다.
console.log(str3.replace(regex,'<em>$&</em>'));  //$&위에 정의한 거를 선택해 준다.. 일치하는 전체를 선택해 준다.


var regex = /<(\/?)p>/g; //{0,1} 0개 또는 1개는 ? 로 바꿔쓸 수 있다.
console.log(str3.replace(regex,'<$1div>')); //$1~ 위에 ()를 찾는다.. 여는것('(') 기준 순서대로 번호가 매겨짐.. 일치하는 일부만 찾는 방법임.



//document.images[2].setAttribute('src','https://placekitten.com/210/78');
//네이버에 로고 고양이로 바꿈..


//앞숫자가 width, 뒷 숫자가 height...


/*
for (var i =0; i<document.images.length; i++){
	//width가 있는거를 찾는다.
	var img = document.images[i];
	var width = img.getAttribute('width');
	var height = document.images[i].getAttribute('height');
	//이미지 주소를 바꾼다...
	if (width !== null && height !== null){
		document.images[i].setAttribute('src','https://placekitten.com/'+width+'/'+height);
	}
}
*/
/*
var elem = document.querySelector('h1');
elem
elem.addEventListener('click',function(event){
	alert('클릭');
});
*/
/*
//문제 : 문서에 있는 모든 h2태그에 이벤트 리스너를 추가하여 클릭한 h2태그의 텍스트가 경고창으로 뜨게
var elems = document.querySelectorAll('h2');
for (var i=0; i<elems.length; i++){
	elems[i].addEventListener('click', function(event){
		console.log(event);
		event.stopPropagation();//event.stopPropagation(); body의 이벤트가 h2로 전파되는 것을 막아준다. 나중에는 중요한 동작을 하게될거야..
		alert(this.innerText);
	});
}
*/
/*내가 한거.....
elem.addEventListener('click', function(this)){
	alert();
}*/
/*
var elemsb = document.querySelector('body');
elem.addEventListener('click',function(event){
	alert('클릭');
});
*/


//이벤트



/*
document.forms[0].elements[2]
document.forms[0].elements['password']
document.forms[0].elements.password
document.forms[0].elements.password.value
//엘리먼트 전체를 다 접근할 때는 숫자로 적는다..
document.forms[0].elements[0].value //밸류 찾기
document.forms[0].elements[0].value = '1234' //밸류 찾아서 바꾸기
*/






//jQuery



//jQuery는 크게 두 단계로 사용된다.
//1. 원하는 엘리먼트를 선택하고
//   jQuery('선택자') 
//   jQuery('p')
//2. 원하는 기능을 사용한다.

// jQuery(document).ready(function(){
// 	//문서가 전부 준비가 완료되면 안쪽에 함수를 실행하겠다...
// 	jQuery('p code').css('color', 'blue');
// }); 
// //이것은 아래와 같다.

// jQuery(function(){
// 	//문서가 전부 준비가 완료되면 안쪽에 함수를 실행하겠다...
// 	jQuery('p code').css('color', 'blue');
// }); 


// //jQuery = $로 바꿔 쓸 수 있따... 그런데 이렇게 하면 충돌이 날 수 있따.
// $(function(){
// 	//문서가 전부 준비가 완료되면 안쪽에 함수를 실행하겠다...
// 	$('p code').css('color', 'blue');
// });

// jQuery(function(){
// 	jQuery('p code').css('color', 'blue');
// });
// jQuery.noConflict();
// //noConflict()를 쓰면 다른 라이브러리와 $ 변수의 충돌을 일으키지 않는다...
// //하지만 다른곳에 있는 $도 다 없어진다... 오류남..
// //그래서 아래와 같이 쓴다.

// jQuery(function($){
// 	//이거 먼저 쓰는걸 공식처럼 외우자..
// });
// jQuery.noConflict();//써도 되구 안써도 된다..





// jQuery(function($){
// 	var codeColor = $('p code').css('color', 'red');
// 	console.log(codeColor);

// 	$('#box').on('click', function(event){
// 		//이벤트 함수의 기본틀
// 		//$(this) // jQuery로 한번 감싸고 사용한다... j쿼리 엘리먼트로 만드는것 
// 		//var width = ?? 이건뭐야
// 		event.shiftKey;//시프트키를 누르고 클릭했는지 체크하는 프로퍼티.. 누르면 참. 안눌렀으면 거짓.
// 		$(this).width(200);//마지막()에 숫자가 없으면 변수에 저장할 수 있음.
// 		$(this).height(300);
// 	});
// });
// jQuery.noConflict();//다른 라이브러리와 $ 변수의 충돌을 일으키지 않는다.


jQuery(function($){
	var codeColor = $('p code').css('color', 'red');
	console.log(codeColor);

	$('#box').on('click', function(event){
		var width = $(this).width();
		var height = $(this).height();
		if (event.shiftKey){
			$(this).width(width-10);
			$(this).height(height-10);
		}else {
			$(this).width(width+10);
			$(this).height(height+10);
		}
	});
});
jQuery.noConflict();//다른 라이브러리와 $ 변수의 충돌을 일으키지 않는다.