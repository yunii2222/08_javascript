/* 자바스크립트의 함수는 객체이다 
* 함수는 값으로 취급할 수 있고 프로퍼티(속성)값으로도 사용할 수 있다. */
var dog = {
    name : '뽀삐',
    // 프로퍼티의 값으로 
    // 메소드 - 객체 내부에 정의 된 함수
    eat : function (food){
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
        // return 값에 따라 달라짐. return 값이 없다면 정해진 타입이 없다.
        // ex) return ''; -> 문자타입
        // ex) return 0;  -> 숫자타입
    }
};

// . : 참조 연산자
// 고구마라는 인자를 전달
dog.eat('고구마');