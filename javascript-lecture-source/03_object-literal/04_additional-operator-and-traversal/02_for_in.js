// for in 반복문 : 객체의 모든 키를 순회
var student= {
//     프로퍼티(속성): 객체의 상태를 나타내는 값으로  키-값 쌍으로 구성
    name : '유관순',
    age:16,
    // 메서드: 프로퍼티(속성)를 참조하고 조작할 수 있는 동작
    getInfo : function (){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// student객체 안에 있는 key값들이 반복된다.
for(var key in student) {
    console.log(`key : ${key}`);

    // 마침표 표기법을 사용햌ㅅ을 경우 key라는 이름의 프로퍼티(속성)키를 찾기 때문에
    // undefined가 반환된다.
    console.log(`student.key : ${student.key}`);

    //프로퍼티(속성)키가 변수인 경우 대괄호 표기법을 사용해야 한다.
    //'key'를 넣으면 key라는 값이 들어가있는 프로퍼티(속성)를 찾아오라는 뜻이 된다. 
    console.log(`student[${key}] : ${student[key]}`);
}