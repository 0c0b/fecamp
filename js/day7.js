//생성자는 타입을 정의하는 것
function Square(width, height)
{
	this.width = width;
	this.height = height;
/*	this.넓이 = function(){
		return this.width * this.height;  이거를 밑에 프로토타입으로 적어준다.
	};*/
}

Square.prototype.넓이 = function(){
	return this.width * this.height;
}



/*Square.prototype = {
	넓이 : function(){
		return this.width * this.height;
	},
	a : function(){
		return this.width * this.height;
	},
	b : function(){
		return this.width * this.height;
	}
};*/

var 사각형1 = new Square(10,5);
var 사각형2 = new Square(3,4);
console.log(사각형1.넓이 === 사각형2.넓이); //매번 함수를 새로 만든다. 커다란 프로그램을 만들 때는 비효율적이다.
console.log(사각형2);
console.log(사각형1.넓이());
console.log(사각형2.넓이());
console.log(사각형1.넓이.apply(사각형2) /*=== 사각형2.넓이() .. 의미만 따지면 이거랑 같다..*/);
console.log(사각형1.넓이.apply(사각형2, [2,3]) === 사각형1.넓이.call(사각형2,2,3));



//apply의 특성
function argarr() {
	console.log(arguments);
	var arr = /*Array.prototype=*/[].concat.apply([], arguments); //var arr = [].concat(1,2,3);
	/*
	위의 코드는 다음과 같다.... 위와 같이 쓰는게 좀더 고수같음 ㅋ
	var arr = [];
	for (var i = 0; i<arguments.length; i++) {
		arr.push(arguments[i]);
	}
	*/
	console.log(arr);
}
argarr(1,2,3);


//문제 : 다음과 같이 동작하는 원(Circle) 데이터를 정의하라.
//var circle1 = new Circle(반지름숫자);
//var circle2 = new Circle(다른_반지름숫자);
//console.log(circle1.넓이()); //원의 넓이 = 반지름 제곱 * Math.PI (파이)
//console.log(circle.둘레()); //원의 둘레 = 2*파이*반지름
//console.log(circle.지름()); //원의 지름 = 2*반지름

//객체지향프로그래밍
function Circle (반지름) {
	this.반지름 = 반지름;
}

Circle.prototype ={
	넓이 : function(){
		return this.반지름 * this.반지름 * Math.PI;
	},
	둘레 : function(){
		return this.반지름 * 2 * Math.PI;
	},
	지름 : function(){
		return this.반지름 * 2;
	},
};

var circle1 = new Circle(5);
var circle2 = new Circle(15);
//인스턴스(instance) : 클래스(class) 또는 타입(type)을 사용해 구체적인 고유 데이터로 만든 것.
//이 때, 인스턴스를 만드는 과정에는 new 연산자가 사용되며 이 과정을 가리켜 인스턴스화(instantiarion)라고 한다.







//Dom
















//보충수업

var person = function (name,age){
	this.name = name; //여기서 this는 밑에 shin
	this.age = age; 

	this.인사하기 = function(){
		console.log('안녕');
	}
};

person.prototype.인사하기2=function(){
	console.log('안녕');
} //이런식으로 해주는 것이 올바른 방법이다..

var shin = new person('이름', '31');
var hong = new person('심기은', '29');
//new해서 만든 신과 홍은 인스턴스라고 부른다..

console.log(shin.인사하기 === hong.인사하기2);


console.log(document.getElementById('box'));
console.log(document.getElementsByTagName('p'));
console.log(document.querySelector('#box'));
document.getElementsByTagName('p')[0].style.background = 'red';


//브라우저가 자바스크립트에서 쓸 수 있는 여러가지 객체를 지원한다...



