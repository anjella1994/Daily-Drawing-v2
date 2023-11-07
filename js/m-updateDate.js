const divHeight = 0.15 * window.innerWidth;

const years = [2020, 2021, 2022];
const months = ["june", "july", "august", "september", "october","november", "december", 
"january", "february", "march", "april", "may", "june", "july", "august", "september", "october","november", "december",
"january", "february", "march", "april"]
const dateCount = [12, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 23]

//월 경계 배열 생성 
let monthBoundary = [];
let sum1 = 0;
for (let i = 0; i < dateCount.length; i++) {
    monthBoundary.push(divHeight * sum1);
    sum1 += dateCount[i];
}

//연 경계 배열 생성
let yearBoundary = [];
yearBoundary.push(monthBoundary[0]); //1번째 달부터 2020년
yearBoundary.push(monthBoundary[7]); //8번째 달부터 2021년
yearBoundary.push(monthBoundary[19]); //20번째 달부터 2022년


//연, 월을 업데이트하는 함수 선언 
let yearBox = document.querySelector("#yearMonth .year");
let monthBox = document.querySelector("#yearMonth .month")
function updateDate(y, m) {
    yearBox.textContent = y;
    monthBox.textContent = m;
}

//연, 월 초기값 입력 
let m = months[0];
let y = years[0];
updateDate(y, m);

//스크롤 시 연, 월 업데이트 
window.addEventListener("scroll", function() {
    let h = window.scrollY;
    for (let i = years.length - 1; i >= 0; i--) {
        if (h >= yearBoundary[i] - 1) {
            y = years[i];
            break;
        }
    }
    for (let i = months.length - 1; i >= 0; i--) {
        if (h >= monthBoundary[i] - 1) {
            m = months[i];
            break;
        }
    }
    updateDate(y, m);
});

