/* 객체 리터럴 생성 */
var student= {
//     프로퍼티(속성): 객체의 상태를 나타내는 값으로  키-값 쌍으로 구성
    name : '유관순',
    age:16,
    // 메서드: 프로퍼티(속성)를 참조하고 조작할 수 있는 동작
    getInfo : function (){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

console.log(typeof student);
console.log(student);

var student2 = {}; // 프로퍼티(속성)를 정의하지 않으면 빈 객체 생성
console.log(typeof student2);
console.log(student2);