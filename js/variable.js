window.onload = () => {
    main();
}


main();

function main() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);

    var a = 40;
    console.log(a);
    b = 50;
    console.log(b);

    //  c = 60;
    //  console.log(c);

    let name = "김준일";
    let age = 30;
    let score = 80.5;
    let status = true;

    console.log("이름" + name + "-type(" + typeof (name) + ")");
    console.log("나이" + age + "-type(" + typeof (age) + ")");
    console.log("성적" + score + "-type(" + typeof (score) + ")");
    console.log("상태" + status + "-type(" + typeof (status) + ")");

    console.log("10" == 10); // 값만비교 , true 뜸
    console.log("10" === 10); //값 + 자료형 비교 , false 뜸
    console.log("10" != 10); // false 뜸
    console.log("10" !== 10); //true 뜸

    let count;
    console.log(count);
    // 변수 선언은 되었지만 초기화가 되지않아 자료형이 결정되지 않으면 undefined;

    let count2 = null;
    console.log(count2);
    //null로 출력

    console.log("--------------------------------")

    //빈값확인
    if (typeof (count2) === undefined || count === null || null === 0 || count === "") {
        console.log(true);
    }


    count = 10;
    //자바스크립트는 값이 undefined, null, 0, ""이면 false 의 결과를 반환한다.
    if (!count) {
        console.log("값이 없음");
    }

    if (!!count) {
        console.log("값이있음");
    }

} 