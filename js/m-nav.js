const nav = document.querySelector("nav");

//드롭다운 클릭 시 나타나기 & 사라지기
const yearMonth = document.querySelector("#yearMonth");
let navOn = false;
function toggleNav() {
    if (navOn) {
        nav.style.height = "0";
        nav.style.borderBottom = "0";
        navOn = false;
    } else {
        nav.style.height = "120vw";
        nav.style.borderBottom = "1px solid #777";
        navOn = true;
    }
}
yearMonth.addEventListener("click", () => toggleNav());

//드롭다운 내 연, 월 클릭하면, 해당 월로 스크롤 이동
let currentYear = Number(yearBox.textContent);
let currentMonth = monthBox.textContent;

let clickedYear = Number(yearBox.textContent); //아무것도 클릭하지 않았을 때 초기값
let activeMonths = [];

//초기 nav 세팅. 클릭 시 active nav 바뀜 (setNav 함수는 순서상 문제로 updateDate.js로 옮김)
setNav(currentYear);
yearNavs.forEach((yearNav, i) => {
    yearNav.addEventListener("click", () => {
        clickedYear = i + 2020;
        setNav(clickedYear);
    });
}); 

let clickedMonth;
//월 클릭 시 스크롤 위치 바뀜 
monthNavs.forEach((monthNav, i) => {
    monthNav.addEventListener("click", () => {
        clickedMonth = i;
        if (activeMonths.includes(i)) {
            let scrollTo;
            switch (clickedYear) {
                case 2020 :  
                    scrollTo = monthBoundary[i - 5];
                    break;
                case 2021 :
                    scrollTo = monthBoundary[i + 7];
                    break;
                case 2022 :
                    scrollTo = monthBoundary[i + 19];
                    break;
        }
            window.scrollTo({top: scrollTo, behavior: "smooth"});
            toggleNav();
        }
    });
});

// const navDivs = document.querySelectorAll("nav div.month")
// for (let i = 0 ; i < 23 ; i++) {
//     navDivs[i].addEventListener("click", () => {
//         const scrollTo = monthBoundary[i];
//         window.scrollTo({
//             top: scrollTo,
//             behavior: "smooth"
//         });
//         nav.style.height = "0px";
//         navOn = false;
//     });
// }