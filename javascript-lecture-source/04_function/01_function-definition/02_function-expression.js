// 함수 표현식
// 자바스크립트 함수는 객체 타입으로 값의 성질을 갖는 "일급 객체"이다.
// 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.

// 함수 표현식에서는 함수명을 생략할 수 있다.
var hello = function (name) {
    return `${name}님 안녕하세여`;
};

console.log(hello('오나윰'));

//함수 표현식에서 함수명을 생략하지 않아도 문제는 없다.
// add는 생략하는게 낫다.
var calc = function add (a,b) {
    return a + b;
}

// 단, 함수 호출은 식별자로 이루어지며 함수명으로는 호출할 수 없다.
console.log(calc(10,20));
// console.log(add(10,20));