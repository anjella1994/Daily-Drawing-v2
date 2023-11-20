//---------------------- 메인 함수 실행 & 이벤트 핸들러 ----------------------//

//메뉴 초기 설정
setNav(y);

//날짜 바 누르면 메뉴 토글 (단, 검색 중 아닐 때만 실행)
dateBar.addEventListener("click", () => !searchOn && toggleNav());

//메뉴의 연 클릭 시 활성화 연, 월 변경
yearNavs.forEach((yearNav, i) => {
    yearNav.addEventListener("click", () => {
        currentNavYear = i + 2020;
        setNav(currentNavYear);
    });
}); 

//메뉴의 월 클릭 시 해당 월로 스크롤 이동하고 메뉴 사라짐  
monthNavs.forEach((monthNav, i) => {
    monthNav.addEventListener("click", () => {
        if (activeMonths.includes(i)) {
            let scrollTo;
            if (!reverseOn) {
                //정배열일 때
                switch (currentNavYear) {
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
            } else {
                //역배열일 때
                switch (currentNavYear) {
                    case 2020 :
                        scrollTo = monthBoundaryRev[i - 5];
                        break;
                    case 2021 :
                        scrollTo = monthBoundaryRev[i + 7];
                        break;
                    case 2022 :
                        scrollTo = monthBoundaryRev[i + 19];
                        break;
                }
            }
            window.scrollTo({top: scrollTo, behavior: "smooth"});
            toggleNav();
        }
    });
});

//스크롤 이동하면 메뉴 다시 세팅
window.addEventListener("scroll", () => {
    setNav(currentNavYear);
});

//---------------------- 주요 함수 선언 ----------------------//

//메뉴 세팅(활성화 연도에 따라 활성화 월 구분하고, 활성화된 연월만 진한 글씨로 표시)
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

//메뉴 토글
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




