// var regex = new RegExp('abc');
// var regex = /abc/; //리터럴.. 윗줄과 같은 의미

var regex = new RegExp('se');
console.log(regex.test(str2)); //test ... 참이면 'true'를 출력한다..반대면 반대를 출력.
console.log(regex.exec(str1));


/[abc]/g; //a또는 b또는 c를 찾아라
/[^abc]/g; //^이게 붙으면 a또는 b또는 c빼고 나머지를 찾아라 
/[a-z]/g; //a~z까지 다 찾아라
/[a-zA-Z]/g; //소문자와 대문자를 다 찾을 때 쓴다.
/[^a-zA-Z]/g; //[]이 안에 든거 빼고 나머지 다..
/./g; //.은 모든 문자..
/0{3}/g //{n} 중괄호 앞에 있는게 n번 반복됨.
/0{1,3}/g //0, 00, 000 이런거를 다 찾음.. 1개 이상 3개 이하..
/80{0,3}/g //8로 시작하면서 0이 세번까지 나오는것 ... {0,}이렇게 쓰면 0개 이상..
/80*/g //0개 이상 
/80+/g //1개 이상...
/^80/g //^이게 []이 안에 있지 않고 밖에 있으면 문자열의 시작을 의미
/80$/g //$이게 []이 안에 있지 않고 밖에 있으면 문자열의 끝을 의미
/^1.*5$/g //^바로 뒤(1)와 $바로 앞(5)에 있는 것에 정확하게 일치하는것을 찾는다...
/^[0-9]{3,4}(-[0-9]{3.4}){1,2}$/g //반복되는 곳을()로 묶어주고 {n}을 쓴다..
//g
//g
찾을곳.match(regex) //매칭되는 것을 찾는다..
찾을곳.replace(regex,'전화번호: $&') //'전화번호: '이 찾는 곳 앞에 붙어...  $가 가리키는 곳은 시작하는 괄호.. $n n번째나온 시작하는 괄호 ...


document.images[0].getAttribute('title') //getAttribute 알아보자..

callBack함수...


var elems = document.getElementsByTagName('h2');

for (var i = 0; i<elems.length; i++){
	elems.addEventListener('click', function (event){
		console.log(event.shiftKey);
	});
}

document.getElementsByTagName('body')[0].addEventListener('click',function(event){console.log('body');});

숙제 2번..??
form....



제이쿼리는
dom을 이용한 조작들을 좀더 쉽게 ...?

jQuery(function ($)/*제이쿼리가 $안에 제이쿼리를 넣어준다..*/{
	//제이쿼리를 쓸 때는 이렇게 감싸서 쓴다... 외우자 ..
	var elms$ = ('body','p','code');
	//console.log($elms);이런식으로 자꾸 확인해 보자..
	$elms.on('click', function(event){
		//this는 클릭된 애
		console.log(this.tagName);
		if (this.tagName === 'p'){
			event.stopPropagation();
		}
	});
})








