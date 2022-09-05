// ex07-21
var x = 2;

// x % 2가 true면 콜론(:) 앞의 두 번째 피연산자인 '홀수'반환, false면 콜론(:)뒤의 세 번째 피연산자 '짝수' 반환
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수



// ex07-22
// 조건문(if...else)을 사용해도 삼항 조건 연산자 표현식과 유사하게 처리할 수 있다.
var x = 2, result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if(x % 2) result = '홀수';
else      result = '짝수';

console.log(result); // 짝수



// ex07-24
// 하지만 조건문은 표현식이 아닌 문이기 때문에 값처럼 사용할 수 없다.
var x = 10;

var result = if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
} 
// SyntaxError: Unexpected token if