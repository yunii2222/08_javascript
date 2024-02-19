/* let
* var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let, const를 도입했다. */


// 1. 변수 중복 선언 금지
let msg = "안녕하세요";
// let msg = "안녕히가세여"; - Identifier 'msg' has already been declared
console.log(msg);

// 2. 블록 레벨 스코프
let i = 0;
for (let i = 0; i < 10; i++){}
console.log(i);

// 3. 변수 호이스팅
// console.log(x); - 변수선언 전에 출력 불가능
let x;
console.log(x);