let clickedDivNum;
let rowNum;

let currentDate;
let currentYear;
let currentMonth;
let currentDay;

function getDate(i) {
    const startDate = new Date('2020-06-19');
    const endDate = new Date('2022-04-23');
    const dateArray = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        dateArray.push(new Date(date));
    }
    currentDate = dateArray[i];
}

function getMonthName(date) {
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    return monthNames[date.getMonth()];
}

clickedDivNum = localStorage.getItem("clickedDivNum");
rowNum = Math.floor(clickedDivNum/4);
getDate(rowNum);

currentYear = currentDate.getFullYear();
currentMonth = getMonthName(currentDate);
currentDay = currentDate.getDate();

let yearBox = document.querySelector("#yearMonth .year");
let monthBox = document.querySelector("#yearMonth .month");
let dayBox = document.querySelector("#imageDesc .day");
yearBox.textContent = currentYear;
monthBox.textContent = currentMonth;
dayBox.textContent = currentDay;




