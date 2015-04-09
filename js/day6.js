//문제 : 1초마다 한번씩 실행하며 현재 시간을 표시하는 clock()함수를 만들자
//단, 시간은 반드시 두 자리로 표시해야한다. 예를 들어 9시 50분 9초 라면 09:50:09로 표시한다.
//사용예: clock();
//힌트: 시간은 docment.title = 시간문자열; 과 같이 작성하면 표시할 수 있다.
function clock(){
	var 현재시간 = new Date();
	var 시 = 현재시간.getHours();
	var 분 = 현재시간.getMinutes();
	var 초 = 현재시간.getSeconds();
	var 밀 = 현재시간.getMilliseconds();
	if (시<10) {
		시 = '0'+시;
	}
	if (분<10) {
		분 = '0'+분;
	}
	if (초<10) {
		초 = '0'+초;
	}
/*	if (밀<10) {
		밀 = '00'+밀;
	}*/
		var str = 시+':'+분+':'+초;
	document.title = str;
	setTimeout(arguments.callee, 1000);
}
clock();


//1부터 10까지 콘솔에 출혁하는 코드
for (var zzz = 1/*초기식*/;  zzz<=10/*조건식*/;  zzz++){
	console.log(zzz);
}

/*아래처럼 쓰기도 한다.
var i=1;
for (;  i<=10 ;){
	consloe.log(i);
	i++;
}*/


//문제 : 인수로 전달한 숫자의 단을 콘솔에 출혁하는 구구단() 함수를 작성하자
//출력 결과  3x1=3..

/*
내가 한것..
function 구구단(num) {
	for (var a=1 ; a<=9 ; a*num){
		console.log(num+'x'+a+'='+a);
	}
}
구구단(3);
*/
function 구구단(num) {
	for (var a=1 ; a<10 ; a++){
		console.log(num + 'x' + a + '=' + (num*a));
	}
}
구구단(3);



// 문자: 2단부터 9단까지 포함한 <table>문자열을 반환하는 함수  빈칸표현은 : &nbsp
/*function 구구단전부(){
	for (var 단=1; 단<10 ; 단++){
		console.log('<th>'+단+'</th>');
	}
	var 구구 = 3;
	var html = '<table>'+ '<tr>' + '<th>' + '단' +'</th>' + '</tr>' +  '<tr>' + '<td>' + '구구' + '</td></tr>' + '</table>';
	return html;
}
window.onload = function() {
	document.getElementById('box').innerHTML = 구구단전부();
}*/


function 구구단전부() {
	var html = '<table>';
	html += '<tr>';
		for (var i=2; i<10; i++){
					if (i===3){
					continue;
					}
			html += '<th>' + i + '단</th>';
		}
	html += '</tr>';

	for (var i=1; i<10; i++){
		html += '<tr>';
		for (var j=2; j<10; j++) {
				if (j===3){
				continue;
				}
			html += '<td>' + j + 'x' + i + '=' + (j*i) + '</td>';
		}
		html += '</tr>';
	}

	html += '</table>';

	return html;
}

window.onload = function() {
	document.getElementById('box').innerHTML = 구구단전부();
}




//문제 전달된 인수 중 숫자만 모두 더한 값을 반환하는 함수 sum()을 작성하라
function sum() {
	var result = 0;

	for (var ii=0; ii<arguments.length; ii++){
		if(typeof arguments[ii] === 'number'){
					result = result + arguments[ii];
		}
	}
	return result;
	
}
console.log(sum(1,5,'+',8)); //14
console.log(sum(1,5,'+',8,10,20,40))//84


//문제: 첫 번째 인수로 전달된 배열에 나머지 인수를 모두 추가하는 함수 push()를 만들자
function push(arr){
	for (var iii=1; iii<arguments.length; iii++){
		arr.push(arguments[iii]);
	}
}
var arr = ['a','b'];
push(arr, 1, 2, 3);
console.log(arr);  //출력결과 : ['a','b',1,2,3]
push(arr, 1, 2, 3, 4, 5);
console.log(arr);  //출력결과 : ['a','b',1,2,3,4,5]


// break - 거기서 멈춰버림
/*function 구구단(num) {
	for (var a=1 ; a<10 ; a++){
			if (i===num){
				break;
			}
		console.log(num + 'x' + a + '=' + (num*a));
	}
}
구구단(3);
*/



// continue - 거기만 멈추고 다음거부터 실행함
// 반복문이 컨티뉴 문을 만나면 현재의 코드 블럭을 건너뛴다.
// 즉, for 문에서는 증강식으로, while 문에서는 조건식으로 이동한다.

/*function 구구단(num) {
	for (var a=1 ; a<10 ; a++){
			if (i===num){
				continue;
			}
		console.log(num + 'x' + a + '=' + (num*a));
	}
}
구구단(3);
*/






/*
[1,2,3]
new Array(1,2,3); //위의 어레이와 같은거다.. 생성자 형태로 쓴것임..  대문자로 쓰면 생성자

'문자열'
new Srring('문자열') //원시타입을 이렇게 안쓴다. 문자열, 숫자열, 불리언

{key: "value"}
*/



//내장 타입의 기능을 확장할 때는 생성자.prototype.메소드이름 = function(){...}형태를 사용한다.
String.prototype.toNumber/*여기 괄호 쓰지 않는다*/ = function(){
	return parseInt(this);
};
console.log('123'.toNumber()); //이때의 this는 123의 문자열
console.log('abc'.toNumber()); //이때는 abc 문자열


//문제 : 배열에서 가장 큰 숫자를 반환하는 prototype 메소드 max()를 정의하라.
Array.prototype.max = function(){
	var max = 0;
	for (var c=0; c<this.length; c++){
		if(typeof this[c] !== 'number'){
			continue;
		}
		if(max<this[c]){
			max = this[c];
		}
	}
	return max;
};
console.log([1,3,5].max()); //5
console.log([10,2,5,'+',-2].max()); //10


//문제 : 날짜 객체에서 가리키는 시각이 오전인지 오후인지 문자열로 반환하는
//prototype 메소드 ampm() 을 작성하라
Date.prototype.ampm = function(){
	var h = this.getHours();
	if(h<12) {
		h= '오전';
	}else {
		h = '오후';
	}
	return h;
}
var date = new Date();
console.log(date.ampm()); //'오후'
var date = new Date(2015,4,12,9);
console.log(date.ampm());//'오전'