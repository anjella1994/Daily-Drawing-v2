let years = ["2020", "2021", "2022"];
let months = ["january", "february", "march", "april", "mayY", "june", "july", "august", "september", "october","november", "december"]

//연, 월 초기값 설정 및 함수 선언
let yearBox = document.querySelector('#year');
let monthBox = document.querySelector('#month');

let y = 0; //연 초기값 "2020"
let m = 5; //월 초기값 "June"
yearBox.textContent = years[y];
monthBox.textContent = months[m];

function updateYearMonth (action) {
    if (action == "yearUp") {
        y++;
    } else if (action == "yearDown") {
        y--;
    } else if (action == "monthUp") {
        m++;
    } else if (action == "monthDown") {
        m--;
    }
    yearBox.textContent = years[y];
    monthBox.textContent = months[m];
}

//높이 조건 만들 때 필요한 상수 및 변수 세팅 
let tableTop = document.querySelector("#header").clientHeight; //표가 시작되는 높이(=헤더의 높이)
let divHeight = document.querySelector("#table div").clientHeight; //날짜 한 칸의 높이
let lastScrollPosition = window.scrollY; //스크롤 이벤트가 시작되기 전 원래 스크롤 위치

//연, 월 경계 위치 배열로 만들기
let borders = [];
let dateCount = [12, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 23]
let sum = 0;
for (let i = 0; i < dateCount.length; i++) {
    sum += dateCount[i]
    borders.push (divHeight * sum);
}

//스크롤 이벤트 시 함수 실행
window.addEventListener("scroll", function(){
    let currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition) {
        for (let i = 0; i < borders.length; i++) {
            if (currentScrollPosition == borders[i]) {
                updateYearMonth("monthUp")
            } 
        }
    } else if (currentScrollPosition < lastScrollPosition) {
        for (let i = 0; i < borders.length; i++) {
            if (currentScrollPosition == borders[i]) {
                updateYearMonth("monthDown");
            }
        }
    }
});