// ex03-02
const arr = [1, 2, 3];
arr.forEach(console.log);

// 내장 터미널을 열고 'node [파일이름]'을 입력하면 js를 실행시킨 결과를 볼 수 있다.



// ex03-03
const arr2 = [1, 2, 3];
arr.forEach(alert);

// "ReferenceError: alert is not defined"
// alert함수는 브라우저에만 동작하는 클라이언트 사이드 Web API(Node.js환경에서는 실행할 수 없음)