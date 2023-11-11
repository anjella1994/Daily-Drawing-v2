//화면 비율이 100:150보다 넓적하면 네비게이터 높이 줄이기
let innerRatio = window.innerHeight / window.innerWidth;

if (innerRatio < 1.5) {
    nav.style.gridTemplateRows = "repeat(12, 7.5vw)";
    yearNavs.forEach((yearNav) =>  {
        yearNav.style.lineHeight = "7.5vw";
    })
    monthNavs.forEach((monthNav) =>  {
        monthNav.style.lineHeight = "7.5vw";
    })
}