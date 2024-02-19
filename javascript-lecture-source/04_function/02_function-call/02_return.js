// 반환문
function  hello(name) {
    return `${name}님 안녕하세요`;

    // 반환문 이후의 코드는 실행되지 않고 무시된다.
    console.log(name);
}

console.log(hello('ㅇㅅㅇ'));

// 반환 값이 없는 함수 생성
function func() {
    console.log('함수가 호출 되었습니다.');
    // 반환 값이 없을 경우 return 반환문 생략 가능
    return; // 반환 값을 명시적으로 지정하지 않으면 undefined가 반환 된다.
}

// 반환 값이 없을 경우 undefined가 반환 된다.
console.log(func());

