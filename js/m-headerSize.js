//화면 비율이 100:150보다 넓적하면 네비게이터 높이 줄이기
let innerRatio = window.innerHeight / window.innerWidth;

//길이 바꿔야 하는 것들 중 아직 불러온 적 없는 객체들 불러오기
const body = document.querySelector("body");
const pageTitle = document.querySelector("#title");
const main = document.querySelector("main");
const belowBttn = document.querySelector("#below");
const footer = document.querySelector("footer");

function changeH(element, h) {
    element.style.height = h;
}
function changeLH(element, h) {
    element.style.lineHeight = h;
}
function changeT(element, t) {
    element.style.top = t;
}

if (innerRatio < 1.5) {
    changeH(pageTitle, "15vw"); 
    changeLH(pageTitle, "15vw");
    
    changeH(dateBar, "7.5vw");
    changeLH(yearBox, "7.5vw");
    changeLH(monthBox, "7.5vw");

    changeH(belowBttn, "7.5vw");
    changeLH(belowBttn, "9.5vw");

    nav.style.gridTemplateRows = "repeat(12, 7.5vw)";
    yearNavs.forEach((yearNav) =>  {
        changeLH(yearNav, "7.5vw");
    })
    monthNavs.forEach((monthNav) =>  {
        changeLH(monthNav, "7.5vw");
    })
    
    changeT(nav, "22.5vw");
    changeT(main, "22.5vw");
    changeT(footer, "10132.5vw")
    changeH(body, "10147.5vw");
}