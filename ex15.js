// let, const 키워드와 블록레벨 스코프
// ex15-01
var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1



// ex15-02
var x = 1;

if(true) {
    // x는 전역 변수다. 이미 선언된 전역 변수가 x가 있으므로 x 변수는 중복 선언된다.
    // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x); // 10



// ex15-03
var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치 않게 i 변수의 값이 변경되었다.
console.log(i); // 5



// ex15-04
// 변수 호이스팅
// 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.(1. 선언단계)
// 변수 foo는 undefined로 초기화된다.(2. 초기화 단계)
console.log(foo); // undefined

// 변수에 값을 할당 (3. 할당 단계)
foo = 123;

console.log(foo); // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;
// 변수 선언문 이전에 변수를 참조하는 것은 변수 호이스팅에 의해 에러를 발생시키지는 않지만 프로그램의 흐름상 맞지 않을뿐더러 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남긴다.



// ex15-05
// let 키워드
var foo = 123;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var foo = 456;

let bar = 123;
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
let bar = 456; // SyntaxError: Identifier 'bar' has already been declared



// ex15-06
let foo = 1; // 전역변수

{
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined
// let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다.



// ex15-07
// 변수 호이스팅
// var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작
console.log(foo); // ReferenceError: foo is not defined
let foo;



// ex15-08
// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1; // 할당문에서 할단 단계가 실행된다.
console.log(foo); // 1



// ex15-09
// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대(TDZ)에서는 변수를 참조할 수 없다.
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1



// ex15-10
// let 키워드도 선언한 변수에 변수 호이스팅이 발생하는 경우도 있다.
let foo = 1; // 전역 변수

{
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    let foo = 2; // 지역 변수
}



// ex15-11
// 이 예제는 브라우저 환경에서 실행해야 한다.

// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x); // 1
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y); // 2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo); // f foo() {}
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo); // f foo() {}



// ex15-12
// 이 예제는 브라우저 환경에서 실행해야 한다.
let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1



// ex15-13 ~ ex15-15
// const 키워드
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const foo = 1;

const foo; // SyntaxError: Missing initializer in const declaration

{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError: foo is not defined



// ex15-16
// var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.



// ex15-18
// 상수
// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
// 나중에 세율이 변경되면 상수만 변경하면 되기 떄문에 유지보수성이 대폭 향상된다.
const TAX_RAPE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RAPE);

console.log(afterTaxPrice); // 110



// ex15-19
// const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없지만 const 키워드로 선언된 변수에 객체를 할당 한 경우 값을 변경할 수 있다.
// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.
const person = {
    name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';

console.log(person); // {name: "Kim"}