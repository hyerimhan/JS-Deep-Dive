// ex04-02
// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Lee' };

var users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' }
];



// ex04-08
console.log(score); // undefined

var score; // 1. 변수 선언
score = 80; // 2. 값의 할당


console.log(score); // 80

// 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다.



// ex04-10
console.log(score2); // undefined

score2 = 80;
var score2;

console.log(score2); // 80
