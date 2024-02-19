// 메서드 단축

// ES5에서 메서드를 정의하려면 프로퍼티(속성)의 값으로 함수를 할당한다.
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

dog.eat('고구마');

// ES6에서 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
var dog2 = {
    name : '뽀삐',
    // 프로퍼티의 값으로
    // 메소드 - 객체 내부에 정의 된 함수
    eat (food){
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
        // return 값에 따라 달라짐. return 값이 없다면 정해진 타입이 없다.
        // ex) return ''; -> 문자타입
        // ex) return 0;  -> 숫자타입
    }
};

dog2.eat('고구마');