//클릭한 이미지의 인덱스 가져와서 행 번호 추출, 날짜 할당할 변수 선언 
let clickedDivNum = localStorage.getItem("clickedDivNum");
let rowNum = Math.floor(clickedDivNum/4);
let currentFullDate = new Date('2020-06-19');

//날짜 계산 함수 선언
function getDate(rowNum) {
    //현재 날짜 계산 
    const startDate = new Date('2020-06-19');
    currentFullDate.setDate(startDate.getDate() + rowNum);
}

function updateCurrentDate(date) {
    //현재 날짜의 연, 월, 일 각각 추출 
    let currentYear = date.getFullYear();
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let currentMonth = monthNames[date.getMonth()];
    let currentDate = date.getDate();

    //현재 날짜 입력 
    const [yearBox, monthBox, dateBox] = document.querySelectorAll(".year, .month, .date");
    yearBox.textContent = currentYear;
    monthBox.textContent = currentMonth;
    dateBox.textContent = currentDate;
}

//날짜 업데이트 함수 실행
getDate(rowNum);
updateCurrentDate(currentFullDate);

// function getDate(i) {
//     const startDate = new Date('2020-06-19');
//     const endDate = new Date('2022-04-23');
//     const dateArray = [];
//     for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
//         dateArray.push(new Date(date));
//     }
//     currentFullDate = dateArray[i];
// }

// function getMonthName(date) {
//     const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
//     return monthNames[date.getMonth()];
// }

// let yearBox = document.querySelector(".year");
// let monthBox = document.querySelector(".month");
// let dateBox = document.querySelector(".date");

// function updateCurrentDate(date) {
//     currentYear = date.getFullYear();
//     currentMonth = getMonthName(date);
//     currentDate = date.getDate();
//     yearBox.textContent = currentYear;
//     monthBox.textContent = currentMonth;
//     dateBox.textContent = currentDate;
// }

// //함수 실행 
// getDate(rowNum);
// updateCurrentDate(currentFullDate);




