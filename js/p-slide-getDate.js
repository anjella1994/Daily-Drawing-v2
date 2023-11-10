//클릭한 이미지의 인덱스 가져와서 행 번호 추출, 날짜 할당할 변수 선언 
let clickedDivNum = localStorage.getItem("clickedDivNum");
let currentFullDate = new Date('2020-06-19');

const startDate = new Date('2020-06-19');
const endDate = new Date('2022-04-23');
const dateArray = [];
for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    dateArray.push(new Date(date));
}

//날짜 계산 함수 선언
function getDate(i) {
    currentFullDate = dateArray[i];
}

const [yearBox, monthBox] = document.querySelectorAll(".year, .month");
const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

let y;
let m;
let d;

let firstDayofMonth;
let firstDayName;
let firstDayofNextMonth;
let daysInMonth;

const dateBoxes = document.querySelectorAll(".date");
let startBoxNum;

function getDateInfo(date) {
    
    //현재 날짜의 연, 월, 일 추출 
    y = date.getFullYear();
    m = date.getMonth();
    d = date.getDate();

    //현재 달의 첫 번째 날의 요일과 일의 개수 구하기
    firstDayofMonth = new Date(y, m, 1);
    firstDayName = firstDayofMonth.getDay(); //0이면 일요일, 1이면 월요일, ... , 6이면 토요일
    firstDayofNextMonth = new Date(y, m + 1, 1);
    daysInMonth = Math.floor((firstDayofNextMonth - firstDayofMonth) / (1000 * 60 * 60 * 24));

    //1일부터 마지막날까지 날짜를 입력할 dateBox불러오고, 시작 div정하기
    startBoxNum = (firstDayName === 0) ? 6 : (firstDayName - 1); //일요일이면 6, 월요일이면 0, ... , 토요일이면 5번 dateBox부터
}

//캘린더 채우기 함수 선언 
function updateCurrentDate(date) {
    getDateInfo(date);

    //연, 월부터 입력 
    let monthName = monthNames[m];
    yearBox.textContent = y;
    monthBox.textContent = monthName;

    //시작 div부터 1부터 마지막 날까지 차례대로 숫자 넣기
    //월이 바뀌었을 경우 대비해 초기화 먼저 하고 
    for (i = 0; i < dateBoxes.length; i++) {
        dateBoxes[i].textContent = "";
    }
    //날짜 채우기 
    if (y == 2020 && m == 5) {
        let a = 19;
        for (i = startBoxNum + 18; i < startBoxNum + daysInMonth; i++) {
            dateBoxes[i].textContent = a;
            a++;
        }
    } else if (y == 2022 && m == 3) {
        let a = 1;
        for (i = startBoxNum; i < startBoxNum + daysInMonth - 7; i++) {
            dateBoxes[i].textContent = a;
            a++;
        }
    } else {
        let a = 1;
        for (i = startBoxNum; i < startBoxNum + daysInMonth; i++) {
            dateBoxes[i].textContent = a;
            a++;
        }
    }

    //현재 날짜 빨간색으로 강조하기 
    //스타일 바꾸는 함수  
    function changeStyle (element, backgroundColor, color, font) {
        element.style.backgroundColor = backgroundColor;
        element.style.color = color;
        element.style.font = font;
    }
    //현재 날짜에 해당하는 div 찾기 
    let currentBoxNum = startBoxNum + d - 1;
    //빨간색으로 바뀐 div 는 원래대로 돌려놓기 
    for (i = 0; i < dateBoxes.length; i++) {
        changeStyle(dateBoxes[i], "transparent", "#333", "normal normal 200 0.9rem/2vw Inter");
    }
    //현재 날짜만 빨간색으로
    changeStyle(dateBoxes[currentBoxNum], "#D15837", "white", "normal italic 500 0.9rem/2vw Inter");
}

//날짜 업데이트 함수 실행
getDate(clickedDivNum);
updateCurrentDate(currentFullDate);
