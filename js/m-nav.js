///////////////////////////////////////
//첫 번째 명령 : 날짜 바 누르면 메뉴 나타나거나 사라지기 

const dateBar = document.querySelector("#dateBar");
const nav = document.querySelector("nav");
let navOn = false;

//nav 토글 함수 선언
function toggleNav() {
    if (navOn) {
        nav.style.height = "0";
        nav.style.borderBottom = "0";
        navOn = false;
    } else {
        nav.style.height = (window.innerHeight / window.innerWidth < 1.5) ? "90vw" : "120vw";
        nav.style.borderBottom = "1px solid #777";
        navOn = true;
    }
}
//날짜 바 누르면 nav 나타나기 & 사라지기 
dateBar.addEventListener("click", () => toggleNav());



////////////////////////////////////////
//두 번째 명령 : 메뉴에서 연, 월 누르면 해당 날짜로 이동 

const yearNavs = document.querySelectorAll("nav .year");
const monthNavs = document.querySelectorAll("nav .month");

//현재 그림에 해당하는 연도 
let currentYear = Number(yearBox.textContent);
//사용자가 메뉴에서 선택한 연도  
let clickedYear = Number(yearBox.textContent); //아무것도 클릭하지 않았을 때 초기값
//사용자가 메뉴에서 선택한 연도에 따른 활성화 월 목록
let activeMonths = []; 

//연에 따른 활성화 월 구분, 활성화 연월만 진한 글씨로 표시하는 함수 선언
function setNav(y) {
    switch (y) {
        case 2020:
            activeMonths = [5,6,7,8,9,10,11];
            break;
        case 2021:
            activeMonths = [0,1,2,3,4,5,6,7,8,9,10,11];
            break;
        case 2022:
            activeMonths = [0,1,2,3];
            break;
    }
    for (let i = 0; i < 3; i++) {
        yearNavs[i].style.color = i === (y - 2020) ? "#555" : "#ddd";
    }
    for (let i = 0; i < 12; i++) {
        monthNavs[i].style.color = activeMonths.includes(i) ? "#333" : "#ddd";
    }
}

//초기 메뉴 활성화 연, 월 세팅
setNav(currentYear);

//updateDate로 인해 스크롤해서 연도 바뀌면 메뉴 다시 세팅
window.addEventListener("scroll", () => {
    let newCurrentYear = Number(yearBox.textContent);
    if (currentYear !== newCurrentYear) {
        setNav(newCurrentYear);
    }
});

//메뉴의 연 클릭 시 활성화 연, 월 변경
yearNavs.forEach((yearNav, i) => {
    yearNav.addEventListener("click", () => {
        clickedYear = i + 2020;
        setNav(clickedYear);
    });
}); 

//메뉴의 월 클릭 시 해당 월로 스크롤 이동하고 메뉴 사라짐  
monthNavs.forEach((monthNav, i) => {
    monthNav.addEventListener("click", () => {
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