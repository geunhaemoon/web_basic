const box1 = document.getElementById("box1");

const box2Array = document.getElementsByClassName("box2");

const divArray = document.getElementsByTagName("div");

//const 상수 const 뒤에 대입된건 변할일이 없다


box1.innerHTML = `<input type = "password">`;
// box1.innerHTML += `<input type = "password">`;
// += 이건 하나 추가할때 
//box2Array[1].innerHTML = `<input type = "text">`;


const box1_qs = document.querySelector("#box1");
//const box2Array_qs = document.querySelectorAll(".box2");
const divArray_qs = document.querySelectorAll("div");

//css에서 사용한 선택자 전부 사용가능
//const box2Array_qs = document.querySelectorAll(".box2 .username-input");

const box2Array_qs = document.querySelectorAll(".box2");
const usernameInput = box2Array_qs[1].querySelector(".username-input");


//box2Array_qs[0].value = "test";
usernameInput.value = "test";

console.log(box2Array_qs);

//??? 뀨...? 뭐가 지나갔다...

