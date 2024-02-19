/* 1. 화살표 함수 기본 문법
* ES6에서 도입 된 화살표 함수는 function 키워드 대신 화살표를 사용해 보다 간략하게 함수를 선언하는 방법이다.
* 화살표 함수는 항상 익명 함수로 정의하며 본문이 한 줄인 함수를 작성할 때 유용하다. */

var message;

message = function () {
    return 'hi';
}
console.log(message());

console.log('===========================');

// function 키워드 생략

message = () => {
    return 'Arrow Function';
};
console.log(message());

console.log('=============매개변수가 없는 함수==============');
// 명령문이 하나만 있을 경우 중괄호 생략 가능
// 함수 몸체 내부의 문이 값으로 평가 될 수 있는 표현식인 문이라면 암묵적으로 반환(return 생량 가능)
message = () => 'Arrow Function are simple!'
console.log(message());

console.log('=============매개변수가 있는 함수==============');
//매개변수가 있는 경우
message = (val1, val2) => 'Arrow' + val1 + val2;
console.log(message('Function', '!!!!!'));

// 매개변수가 하나이면 소괄호를 생략할 수 있다.
// 매개변수가 없거나 여러 개일 경우에는 생략할 수 있다.
message = val => "Arrow" + val;
console.log(message('Function'));
