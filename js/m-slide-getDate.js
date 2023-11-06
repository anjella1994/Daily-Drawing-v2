//변수, 함수 선언

let clickedDivNum;
let rowNum;

let currentFullDate;
let currentYear;
let currentMonth;
let currentDate;

function getDate(i) {
    const startDate = new Date('2020-06-19');
    const endDate = new Date('2022-04-23');
    const dateArray = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        dateArray.push(new Date(date));
    }
    currentFullDate = dateArray[i];
}

function getMonthName(date) {
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    return monthNames[date.getMonth()];
}

let yearBox = document.querySelector(".year");
let monthBox = document.querySelector(".month");
let dateBox = document.querySelector(".date");

function updateCurrentDate(date) {
    currentYear = date.getFullYear();
    currentMonth = getMonthName(date);
    currentDate = date.getDate();
    yearBox.textContent = currentYear;
    monthBox.textContent = currentMonth;
    dateBox.textContent = currentDate;
}

//클릭한 div 번호 가져오기 -> 몇 행인지 구하기 -> 날짜 구하기 -> 날짜 입력하기 

clickedDivNum = localStorage.getItem("clickedDivNum");
rowNum = Math.floor(clickedDivNum/4);
getDate(rowNum);
updateCurrentDate(currentFullDate);



