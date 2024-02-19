/* const
* let 키워드에서 알아본 특징은 모두 동일하며 상수(const) 선언에서 사용 된다는 점이 특징이다. */

// const x;
const x = 1;

// 일반적으로 상수의 이름은 대문자로 선언, 여러 단어로 이루어진 경우 _(언더스코어)로 구분
const DISCOUNT_DATE = 0.15;

const student = {
    name: '윤아무개',
    age: 26
};

 student.name = '윤';
 console.log(student);

 // 객체를 재할당 하는 것은 불가능하다.
// student = {};


