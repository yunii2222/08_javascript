/* var
* ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었는데
* 이는 몇 가지 문제를 유발한다 */

// 1. 변수 중복 선언
var msg = "안녕하세요";
console.log(msg);

/* var 키워드로 선언 된 변수는 같은 스코프 내 중복 선언이 허용 된다.
* 초기화 문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다. */
var msg = "안녕히가세요";
console.log(msg);

// 초기화 문이 없는 변수 선언문은 무시 된다.
var msg;
console.log(msg);

// 2. 함수 레벨 스코프
// 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.
var i = 0;
for (var i = 0; i < 10; i++) {}
console.log(i);

// 3. 변수 호이스팅
// 변수 선언문이 스코프의 선두로 끌어올려진 것처럼 동작한다.
console.log(test);
test = '반갑습니다.';
console.log(test);
var test;