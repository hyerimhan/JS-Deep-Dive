// ex12-11
// 가명 함수 표현식
var add = function foo(x, y) {
    return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

// 함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5)); // ReferenceError: foo is not defined

// 함수 선언문은 "표현식이 아닌 문"이고 함수 표현식은 "표현식인 문"이다.
// 함수 선언문
function funcDeclarations() {
    return 'A function declaration';
}
funcDeclarations(); //  function declaration

// 함수 표현식
var funcExpression = function() {
    return 'A function expression';
}
funcExpression(); // A function expression

// 함수 호이스팅(함수 선언문) : 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징. 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행됨. 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있음.
// 변수 호이스팅(함수 표현식) : var 키워드를 사용한 변수 선언문 이전에 변수를 참조하면 변수 호이스팅에 의해 undefined로 평가됨. 런타임에 평가됨(할당문이 실행되는 시점에 평가됨). 함수 표현식으로 정의한 함수는 반드시 함수 표현식 이후에 참조 또는 호출해야함.
// 함수 선언문 대신 함수 표현식을 사용할 것을 권장.



// ex12-15
// 화살표 함수
// 화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화되어 있다.
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7



// ex12-17
// 함수 호출
function add(x, y) {
    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined



// ex12-23
// 인수 확인
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }

    return x + y;
}

console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.



// ex12-28
// 반환문
// 반환문은 함수 몸체 내부에서만 사용할 수 있다. 전역에서 반환문을 사용하면 문법 에러(SyntaxError: Illegal return statement)가 발생한다.
function multiply(x, y) {
    return x * y; // 반환문
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
}

console.log(multiply(3, 5)); // 15b



// ex12-33
// 참조에 의한 전달과 외부 상태 변경
// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

// 외부 상태
var num = 100;
var person = {name: 'Lee'};

console.log(num); // 100
console.log(person); // {name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // {name: 'Kim'



// ex12-34
// 익명 즉시 실행 함수
// 단 한 번만 호출되며 다시 호출할 수 없다.
(function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 익명 함수를 사용하는 것이 일반적이나 기명 즉시 실행함수도 사용할수 있지만 다시 호출할 수 없다.
// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined



// ex12-42
// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function(a, b){
    return a * b;
}(3, 5));

console.log(res); // 15
// 즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌을 방지할 수 있다.



// 재귀함수
// 스택 오버플로 에러를 발생시킬 수 있으므로 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용
// ex12-43
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

// 반복문 없이 구현하기
function countdown(n) {
    if(n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);



// 중첩함수
// ex12-48
function outer() {
    var x = 1;
    
    // 중첩 함수
    function inner() {
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }

    inner();
}

outer();



// 콜백 함수
// ex12-49
// n만큼 어떤일을 반복한다.
function repeat(n) {
    // i를 출력한다.
    for(var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4



// repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.
// n만큼 어떤 일을 반복한다.
function repeat1(n) {
    // i를 출력한다.
    for(var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력한다.
        if(i % 2) console.log(i);
    }
}

repeat2(5); // 1 3



// ex12-51
// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
    for(var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function(i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
    if(i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1 3