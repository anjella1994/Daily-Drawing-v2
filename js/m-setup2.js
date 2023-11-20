/* ----------------- DOM 요소 ----------------- */

//기초 요소 
const body = document.querySelector("body")
const pageTitle = document.querySelector("#title");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

//날짜 바, 그 안의 연 박스, 월 박스
const dateBar = document.querySelector("#dateBar");
const yearBox = document.querySelector("#dateBar .year");
const monthBox = document.querySelector("#dateBar .month");
const belowBttn = document.querySelector("#below");

//날짜 바 클릭하면 나오는 네비게이터, 그 안의 연 박스, 월 박스들
const nav = document.querySelector("nav");
const yearNavs = document.querySelectorAll("nav .year");
const monthNavs = document.querySelectorAll("nav .month");

//월의 첫 행, 월의 마지막 행, 두 배열 합친 배열
const firstBoxes = document.querySelectorAll("#calendar div.first");
const lastBoxes = document.querySelectorAll("#calendar div.last")
const boundaryBoxes = [...firstBoxes, ...lastBoxes];

//언더바 버튼, 검색창
const reverseBttn = document.querySelector("#reverse");
const searchBox = document.querySelector("#searchBox");
const viewAllBttn = document.querySelector("#viewAll");

//캘린더 1행의 높이(15vw)
const rowHeight = 0.15 * window.innerWidth;

/* ----------------- 배열 선언 ----------------- */

//연 목록, 월 목록, 월별 날 개수
const years = [2020, 2021, 2022];
const months = ["june", "july", "august", "september", "october","november", "december", 
"january", "february", "march", "april", "may", "june", "july", "august", "september", "october","november", "december",
"january", "february", "march", "april"]
const dateCount = [12, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 23]

/* ----------------- 변수 선언 ----------------- */

//현재 연, 월(초기값 설정)
let m = months[0];
let y = years[0];

//월 경계 스크롤 높이(정배열)
let monthBoundary = [];
let sum1 = 0;
for (let i = 0; i < dateCount.length; i++) {
    monthBoundary.push(rowHeight * sum1);
    sum1 += dateCount[i];
}

//연 경계 스크롤 높이(정배열)
let yearBoundary = [];
yearBoundary.push(monthBoundary[0]); //1번째 달부터 2020년
yearBoundary.push(monthBoundary[7]); //8번째 달부터 2021년
yearBoundary.push(monthBoundary[19]); //20번째 달부터 2022년

//월 경계 스크롤 높이(역배열)
let fullHeight = rowHeight * 674; //0빼고 전체 높이에서 해당 높이를 뺀 값을 새로운 배열로 생성
let monthBoundaryRev = monthBoundary.slice(1).map((height) => {
    return fullHeight - height;
});
monthBoundaryRev.push(0); //시간은 정순이라서 높이는 역순

//연 경계 스크롤 높이(역배열)
let yearBoundaryRev = [];
yearBoundaryRev.push(monthBoundaryRev[6]); //밑에서 7번째 달부터 2020년
yearBoundaryRev.push(monthBoundaryRev[18]); //밑에서 19번째 달부터 2021년
yearBoundaryRev.push(monthBoundaryRev[22]); //밑에서 23번째 달부터 2022년

//메뉴에서 활성화되는 연도 
let currentNavYear = y; //아무것도 클릭하지 않았을 때 초기값
//메뉴에서 활성화되는 월 
let activeMonths = []; 

//메뉴 활성화, 비활성화
let navOn = false;
//정배열, 역배열
let reverseOn = false;
//검색 중, 검색 완료
let searchOn = false;