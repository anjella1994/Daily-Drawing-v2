//첫 번째 명령 만들기 : 연 또는 월 클릭 시 메뉴 토글하기 

let nav = document.querySelector("nav")
let navOn = false;
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
yearBox.addEventListener("click", () => toggleNav()); //yearBox는 getDate에서 이미 선언
monthBox.addEventListener("click", () => toggleNav()); //monthBox는 getDate에서 이미 선언

let belowBttn = document.querySelector("#below");
belowBttn.addEventListener("click", () => toggleNav());


//두 번째 명령 만들기 : 메뉴에 연, 월 중 현재 유효한 연, 월만 진한 글씨 표기하기 

//메뉴 연, 월 불러오기 
let yearNavs = document.querySelectorAll("nav .year");
let monthNavs = document.querySelectorAll("nav .month");

let clickedYear = currentFullDate.getFullYear(); //초기값 

//연도에 따라 활성화 월 구분, 유효 연월만 진한 글씨 표시하는 함수 선언
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
    for (let i = 0; i < yearNavs.length; i++) {
        yearNavs[i].style.color = i === (y - 2020) ? "#555" : "#ddd";
    }
    for (let i = 0; i < monthNavs.length; i++) {
        monthNavs[i].style.color = activeMonths.includes(i) ? "#333" : "#ddd";
    }
}

//현재 떠 있는 그림에 맞게 활성화 연, 월 표시
setNav(currentFullDate.getFullYear());

//메뉴의 연 클릭하면 활성화 월 바뀜
yearNavs.forEach((yearNav, i) => {
    yearNav.addEventListener("click", () => {
        clickedYear = i + 2020;
        setNav(clickedYear);
    });
}); 




//세 번째 명령 만들기 : 메뉴의 연, 월 클릭 시 해당 월로 이동 

//날짜를 입력해서 currentFullDate 바꾸고 clickedDivNum 구하기 
function IndexofDate (y, m, d) {
    currentFullDate = new Date(y, m, d);
    currentFullDate.setHours(9,0,0,0); //getDate파일에 있는 dateArray에 있는 날짜들이 시간이 다 9시로 되어 있음
    //날짜에 해당하는 인덱스(clickedDivNum) 찾기
    clickedDivNum = dateArray.findIndex(date => date.getTime() === currentFullDate.getTime());
}

//메뉴의 월 클릭시 해당 월의 1일로 이동 (20년 6월만 19일)
monthNavs.forEach((monthNav, i) => {
    monthNav.addEventListener("click", () => {
        if(activeMonths.includes(i)) { //활성화 월에 대해서만 함수 실행
            if(clickedYear === 2020 && i === 5) { 
                IndexofDate(clickedYear, i, 19);
                updateSlide(clickedDivNum);
            } else {
                IndexofDate(clickedYear, i, 1);
                updateSlide(clickedDivNum);
            }
            toggleNav();
        }
    });
});




//네 번째 명령 만들기 : 캘린더의 일 클릭하면 해당 날짜로 이동 

filledBoxes.forEach((filledBox,i) => {
    filledBox.addEventListener("click", () => {
        if (y == 2020 && m == 5) {
            IndexofDate(y, m, i + 19);
            updateSlide(clickedDivNum);
        } else {
            IndexofDate(y, m, i + 1)
            updateSlide(clickedDivNum);
        }
    });    
});




