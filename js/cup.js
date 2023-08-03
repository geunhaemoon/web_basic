window.onload = () => {
    const cupImg = document.querySelector(".img-border img");
    cupImg.src = "./img/cup01.jpg";
    cupImg.onclick = cupImgOnClickHandle;
    
    document.onclick = () => {
        if (cupImg.src.includes("cup01")) {
            cupImg.src = "./img/cup02.jpg";
        } else {
            cupImg.src = "./img/cup01.jpg";
        }
    }
}

const cupImgOnClickHandle = (e) => {
    if (e.target.src.includes("cup01")) {
        e.target.src = "./img/cup02.jpg";  
    } else {
        e.target.src = "./img/cup01.jpg";
    }
}
// <img src="" alt=""  onclick=cupImgClickHandle>
// 이랑 똑같음..????

// querySelector 한거랑 e.target한거랑 똑같음..??
// 이벤트가 일어난 대상과 document 같음...?

