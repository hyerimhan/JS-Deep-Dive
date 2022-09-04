// ex06-10
var template = '<ul>\n\t<li><a href="#>Home</a></li>\n</ul>';
console.log(template);
//  줄바꿈과 들여쓰기가 적용된 HTML 문자열은 다음과 같이 \n 다음행으로 이동, \t 탭(수평) 이스케이프 시퀀스를 넣어 사용해 작성한다.

// ex06-11(= ex06-10)
var template2 = `<ul>
    <li><a href="#">Home</a></li>
</ul>`
// 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.



// ex06-12
var first = 'Ung-mo';
var last = 'Lee';

// ES5 문자열 연결
console.log('My name is ' + first + ' ' + last + '.'); // My name is Ung-mo Lee.

// ES6 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.
// 표현식을 삽입하려면 ${}으로 표현식을 감싼다. 
// 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입된다.



// ex06-14
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}
// 표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다.
// 템플릿 리터럴이 아닌 일반 문자열에서의 표현식 삽입은 문자열로 취급된다.