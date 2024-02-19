/* 중첩 함수
* 함수 내부에 정의 된 함수를 중첩 함수 또는 내부 함수라고 한다.
* 중첩 함수를 포함하는 함수를 외부 함수라고 한다.
* 일반적으로 중첩 함수믄 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다. */
// 외부함수
function outer() {

    var outerVal = '외부 함수';

    //내부함수
    function  inner() {
        var innerVal = '내부 함수';

        // 외부 함수의 변수를 내부 함수에서 참조할 수 있다.
        console.log(`outerVal : ${outerVal}, innerVal : ${innerVal}`);
    }
    // 내부 함수 호출
    inner();
}
// 외부 함수 호출
outer();

