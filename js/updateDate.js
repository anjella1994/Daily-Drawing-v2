const divHeight = document.querySelector("#table div").clientHeight;

const years = [2020, 2021, 2022];
const months = ["june", "july", "august", "september", "october","november", "december", 
"january", "february", "march", "april", "may", "june", "july", "august", "september", "october","november", "december",
"january", "february", "march", "april"]
const dateCount = [12, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 23]

//월 경계 배열
let monthBoundary = [0];
let sum = 0;
for (let i = 0; i < dateCount.length - 1; i++) {
    sum += dateCount[i]
    monthBoundary.push(divHeight * sum);
}

//연 경계 배열
let yearBoundary1 = 0;
for (let i = 0; i < 7; i++) {
    yearBoundary1 += divHeight*dateCount[i];
}
let yearBoundary2 = 0;
for (let i = 0; i < 19; i++) {
    yearBoundary2 += divHeight*dateCount[i];
}
let yearBoundary = [0, yearBoundary1, yearBoundary2]

//현재 연, 월 변수 선언 
let m = months[0];
let y = years[0];

//현재 연, 월을 업데이트하는 함수 선언 
let yearBox = document.querySelector("#yearMonth .year");
let monthBox = document.querySelector("#yearMonth .month")
function updateDate(y, m) {
    yearBox.textContent = y;
    monthBox.textContent = m;
}
updateDate(y, m);

//현재, 연, 월 계산해서 변수에 할당 
window.addEventListener("scroll", function() {
    let h = window.scrollY;
    for (let i = years.length - 1; i >= 0; i--) {
        if (h >= yearBoundary[i]) {
            y = years[i];
            break;
        }
    }
    for (let i = months.length - 1; i >= 0; i--) {
        if (h >= monthBoundary[i]) {
            m = months[i];
            break;
        }
    }
    updateDate(y, m);
});

