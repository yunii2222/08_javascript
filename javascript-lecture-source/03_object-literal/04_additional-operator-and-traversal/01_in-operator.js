// in 연산자 : 프로퍼티(속성) 존재 여부 확인
var student = {
    name : '유관순',
    age : 16,
    test : undefined
};

//name 이라는 프로퍼티가 객체내부에 있기때문에 false
console.log(student.name ===  undefined);

//height 이라는 프로퍼티가 객체내부에 없기 때문에 ture
console.log(student.height ===  undefined);

// 프로퍼티(속성)은 존재하지만 값이 undefined이기 때문에 ture
console.log(student.test === undefined);

//student라는 객체 안에 프로퍼티(속성)가 존재하느냐
console.log("name" in student)
console.log("height" in student)
console.log("test" in student)