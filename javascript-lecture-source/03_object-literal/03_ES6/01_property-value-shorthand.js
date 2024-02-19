// 프로퍼티(속성)값 단축 구문
var id:string  = 'p-001';
var price:number = 20000;

var product = {
    id : id,
    price : price
};

console.log(product);

// ES6에서는 프로퍼티(속성)값으로 변수를 사용하는 경우
// 변수 이름과 프로퍼티(속성) 키가 동일한 이름일 때 프로퍼티(속성) 키를 생략할 수 있다.
var product2 = {id, price};
console.log(product2);