//---------------------- 메인 함수 실행  ----------------------//

//화면 비율이 100:150보다 넓적하면 네비게이터 높이 줄이기

if (window.innerHeight / window.innerWidth < 1.5) {
    //제목 높이 수정 
    changeH(pageTitle, "15vw"); changeLH(pageTitle, "15vw");
    //날짜바 높이 수정
    changeH(dateBar, "7.5vw");
    changeLH(yearBox, "7.5vw");
    changeLH(monthBox, "7.5vw");
    changeLH(belowBttn, "10vw");
    //메뉴 내 연, 월 높이 수정
    nav.style.gridTemplateRows = "repeat(12, 7.5vw)";
    yearNavs.forEach((yearNav) =>  {
        changeLH(yearNav, "7.5vw");
    })
    monthNavs.forEach((monthNav) =>  {
        changeLH(monthNav, "7.5vw");
    })
    //메뉴 위치 수정 
    changeT(nav, "22.5vw");
    //전체 높이 수정
    changeH(body, "10147.5vw");
}

//---------------------- 주요 함수 선언 ----------------------//

//높이 변경
function changeH(element, h) {
    element.style.height = h;
}
//lineheight 변경
function changeLH(element, h) {
    element.style.lineHeight = h;
}
//top 변경
function changeT(element, t) {
    element.style.top = t;
}