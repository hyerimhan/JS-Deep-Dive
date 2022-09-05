// ex08-02
// 조건문 1.
// if...else문(조건문)은 논리적으로 참, 거짓으로 실행할 코드 블록을 결정한다.
var num = 2;
var kind;

if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind); // 양수

// ex08-03
// 조건문 2.
// 만약 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.
var num = 2;
var kind;

if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";
console.log(kind); // 양수

// ex08-06
// 삼항 조건 연산자
var num = 2;

var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind); // 양수

// ex08-07
// switch문은 논리적으로 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February";
  case 3:
    monthName = "March";
  case 4:
    monthName = "April";
  case 5:
    monthName = "May";
  case 6:
    monthName = "June";
  case 7:
    monthName = "July";
  case 8:
    monthName = "August";
  case 9:
    monthName = "September";
  case 10:
    monthName = "October";
  case 11:
    monthName = "November";
  case 12:
    monthName = "December";
  default:
    monthName = "Invalid month";
}

console.log(monthName); // Invalid month
// case문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만 문을 실행 후 switch문을 탈출하지 않고 switch문이 끝날 때까지 이후의 모든 case문과 default문을 실행함(폴스루)
// monthName 변수에 'November'가 할당된 후 switch 문을 탈출하지 않고 연이여 'December'가 재할당되고 마지막으로 'Invalid month'가 재할당된 것.



// ex08-08
// break문을 사용하여 코드 블록에서 탈출해야 한다.
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November



// ex08-09
// 폴스루가 유용한 경우
var year = 2000;
var month = 2;
var days = 0;

switch(month){
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); // 29



// ex08-13
// 이중 중첩 for문
// 두 개의 주사위를 던졌을 때 두 눈의 합이 6이 되는 모든 경우의 수를 출력
for(var i = 1; i <= 6; i++) {
  for(var j = 1; j <= 6; j++) {
    if(i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]



// ex08-14
// while문
// for문은 반복 횟수가 명확할 떄 주로 사용하고 while문은 반복 횟수가 불명확할 때 주로 사용한다.
var count = 0;

// count가 3보다 작을 떄까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}



// ex08-17
// do...while문
// 코드 블록을 먼저 실행하고 조건식을 평가한다. 무조건 한 번 이상 실행된다.
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
}while(count < 3);  // 0 1 2



// ex08-21
// break문
// 중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진입힌다. 내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용한다.
// 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 방생시킬 가능성이 높아지기 때문에 권장하지 않음.
outer: for(var i = 0; i < 3; i++) {
  for(var j = 0; j < 3; j++) {
    if(i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log('Done!');



// ex08-22
// 문자열에서 특정 문자의 인덱스(위치)를 검색하기
var string = 'Hello world.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l'이면
  if(string[i] === search) {
    index = i;
    break; // 반복문을 탈출한다.
  }
}

console.log(index); // 2
// = console.log(string.indexOf(search)); // 2



// ex08-23
var string = 'Hello World.';
var search = 'l';
var count = 0;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if(string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}
// ex) (string[i] === search) continue 'Heo Word.'
//     (string[i] !== search) continue 'll l'

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3



// ex08-24
// if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하고 가독성도 좋지만,
// 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문을 사용하는 편이 가독성이 더 좋다.

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for(var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if(string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for(var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}