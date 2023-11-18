//---------------------- 메인 함수 실행 & 메인 이벤트 핸들러 ----------------------//

//초기 메뉴 상태 설정
currentNavYear = currentFullDate.getFullYear();
setNav(currentFullDate.getFullYear());

//날짜 바의 연, 월 클릭하면 메뉴 나타나고 사라지기 
yearBox.addEventListener("click", () => toggleNav()); 
monthBox.addEventListener("click", () => toggleNav()); 
belowBttn.addEventListener("click", () => toggleNav());

//메뉴의 연 클릭하면 메뉴 상태 변경
navYears.forEach((navYear, i) => {
    navYear.addEventListener("click", () => {
        currentNavYear = i + 2020;
        setNav(currentNavYear);
    });
}); 

//메뉴의 월 클릭하면 해당 월의 첫 날로 이동
navMonths.forEach((navMonth, i) => {
    navMonth.addEventListener("click", () => {
        //활성화 월에 대해서만 날짜 이동
        if(activeMonths.includes(i)) { 
            if(currentNavYear === 2020 && i === 5) { 
                getIndex(currentNavYear, i, 19);
                updateSlide(drawingIndex);
            } else {
                getIndex(currentNavYear, i, 1);
                updateSlide(drawingIndex);
            }
            toggleNav();
        }
    });
});

//날짜 바의 일 클릭하면 그 날짜로 이동
filledBoxes.forEach((filledBox,i) => {
    filledBox.addEventListener("click", () => {
        if (y == 2020 && m == 5) {
            getIndex(y, m, i + 19);
            updateSlide(drawingIndex);
        } else {
            getIndex(y, m, i + 1);
            updateSlide(drawingIndex);
        }
    });    
});

//---------------------- 주요 함수 선언 ----------------------//

//연도에 따라 그림 그린 월만 진하게 표시하기
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
    for (let i = 0; i < navYears.length; i++) {
        navYears[i].style.color = i === (y - 2020) ? "#555" : "#ddd";
    }
    for (let i = 0; i < navMonths.length; i++) {
        navMonths[i].style.color = activeMonths.includes(i) ? "#333" : "#ddd";
    }
}

//메뉴 토글 함수
function toggleNav() {
    if (navOn) {
        nav.style.height = "0";
        navOn = false;
    } else {
        nav.style.height = "24vw";
        navOn = true;
    }
}





