function add(x, y) {
    return x + y;
}

console.log(add(10, 20)); 

function sub(x, y) {
    return;
}

console.log("");

const printInfo = function () {
    console.log("정보출력");
};

printInfo();

console.log(typeof (printInfo));

function callback(fx) {
    console.log("콜백함수");
    fx();
}

callback(printInfo);

const fx1 = function (a) {
    console.log("a:" + a);
}

fx1(10);

//화살표 함수(람다)
const fx2 = (b) => {
    console.log("b" + b);
}