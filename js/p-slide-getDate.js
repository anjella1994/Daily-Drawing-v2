//첫 번째 명령 만들기 : 클릭한 이미지의 인덱스 가져와서 날짜 계산

//인덱스 가져오기
let clickedDivNum = Number(localStorage.getItem("clickedDivNum"));

//날짜 계산용 배열 만들기
const startDate = new Date('2020-06-19');
const endDate = new Date('2022-04-23');
const dateArray = [];
for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    dateArray.push(new Date(date));
}
//날짜 계산 함수 선언
let currentFullDate = new Date('2020-06-19'); //초기값
function getDate(i) {
    currentFullDate = dateArray[i];
}




//두 번째 명령 만들기 : 캘린더 바 채우기 
//현재 날짜의 연, 월 입력 + 해당 월의 1일부터 마지막 날까지 요일에 맞게 숫자 입력 + 현재 날짜만 빨간 색으로 표시) 

//연, 월, 일 입력할 박스 가져오기
const [yearBox, monthBox] = document.querySelectorAll(".year, .month");
const dateBoxes = document.querySelectorAll(".date");

//월 이름 배열 생성 (월은 글자로 넣을 것이므로)
const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

//현재 연, 월, 일 변수 생성
let y; 
let m; 
let d;

//현재 월의 일 개수를 계산하기 위한 변수 생성
let firstDayofMonth;
let firstDayofNextMonth;
let daysInMonth; //현재 달 일의 개수 = 이번 달 1일부터 다음 달 1일까지 날 개수 계산할 거임
let firstDayName; //현재 달 1일의 요일

//현재 월의 1일이 몇 번째에 입력될지 구할 변수 
let startBoxNum;

//날짜가 입력되는 박스 배열 만드는 함수 선언
let filledBoxes = [];

//위에 생성한 변수들의 값 구하는 함수 선언
function getDateInfo(date) {
    //현재 날짜의 연, 월, 일 추출 
    y = date.getFullYear();
    m = date.getMonth();
    d = date.getDate();

    //현재 월의 일 개수와 1일의 요일 구하기
    firstDayofMonth = new Date(y, m, 1);
    firstDayofNextMonth = new Date(y, m + 1, 1);
    daysInMonth = Math.floor((firstDayofNextMonth - firstDayofMonth) / (1000 * 60 * 60 * 24));
    firstDayName = firstDayofMonth.getDay(); //0이면 일요일, 1이면 월요일, ... , 6이면 토요일

    //현재 월의 1일의 요일을 이용해서, 시작 박스 구하기
    //firstDayName이 0이면 6부터, 1이면 0부터, 2이면 1부터, ... 
    startBoxNum = (firstDayName === 0) ? 6 : (firstDayName - 1); //일요일이면 6, 월요일이면 0, ... , 토요일이면 5번 dateBox부터

    let filledBoxNums = [];
    if (y == 2020 && m == 5) {
        for (i = startBoxNum + 18; i < startBoxNum + daysInMonth; i++) {
            filledBoxNums.push(i);
        }
    } else if (y == 2022 && m == 3) {
        for (i = startBoxNum; i < startBoxNum + daysInMonth - 7; i++) {
            filledBoxNums.push(i);
        }
    } else {
        for (i = startBoxNum; i < startBoxNum + daysInMonth; i++) {
            filledBoxNums.push(i);
        } 
    }
    filledBoxes = filledBoxNums.map(i => dateBoxes[i]); 
}

//캘린더 채우기 함수 선언 
function updateCurrentDate(date) {
    getDateInfo(date); //날짜 입력 박스 가져오기 

    // 1단계 : 연, 월부터 입력 
    let monthName = monthNames[m];
    yearBox.textContent = y;
    monthBox.textContent = monthName; 

    // 2단계 : 시작 박스부터 시작해 1일부터 마지막 날까지 차례대로 숫자 넣기
    for (i = 0; i < dateBoxes.length; i++) { //월이 바뀌었을 경우 대비해 초기화 먼저 하고 
        dateBoxes[i].textContent = "";
    }
    let inputNum = (y == 2020 && m == 5) ? 19 : 1; //시작 날짜
    for (i = 0; i < filledBoxes.length; i++) {
        filledBoxes[i].textContent = inputNum;
        inputNum++;
    }

    // 3단계 : 현재 날짜 빨간색으로 강조하기 
    function changeStyle (element, backgroundColor, color, font) { //스타일 바꾸는 함수 
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
    element.style.font = font;
    }
    let currentBoxNum = startBoxNum + d - 1; //현재 날짜에 해당하는 div 찾기 
    for (i = 0; i < dateBoxes.length; i++) {
    changeStyle(dateBoxes[i], "transparent", "#333", "normal normal 200 0.9rem/2vw Inter"); //모든 div 초기화 먼저 하고 
    }
    changeStyle(dateBoxes[currentBoxNum], "#D15837", "white", "normal italic 500 0.9rem/2vw Inter"); //현재 날짜만 빨간색으로
}

//첫 번째 명령과 두 번째 명령 모두 실행
getDate(clickedDivNum);
updateCurrentDate(currentFullDate);
