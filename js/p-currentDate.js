const calendar = document.getElementById("calendar");
const divs = calendar.querySelectorAll("#calendar > div");

let currentMonth;
let currentDay;

//div 스타일 바꾸는 함수 
function changeStyle (element, backgroundColor, color, font, textTransform) {
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
    element.style.font = font;
    element.style.textTransform = textTransform;
}

//마우스 댄 날짜의 월, 요일 div 구하는 함수
function getCurrentDate (i) { //div의 index
    //행 번호 (0부터 시작)
    const rowNumber = Math.floor(i / 40); 
    //열 번호 (0부터 시작)
    const columnNumber = i % 40;
    //월 빨간색 표시
    currentMonth = divs[rowNumber * 40 + 1];
    currentDay = divs[columnNumber];
}

//마우스 댄 날짜에 해당하는 월, 요일 div에 강조 생기거나 없어지는 함수 
function dateOn(div, i) {
    let dateNumBox = div.querySelector("div");
    dateNumBox.classList.add("active");
    if(div.classList.contains("image") && !div.classList.contains("empty")){
        getCurrentDate(i);
        //월 빨간색 표시
        changeStyle(currentMonth, "#D15837", "white", "normal normal 500 1rem/2vw Karla", "uppercase");
        //요일 빨간색 표시
        changeStyle(currentDay, "#D15837", "white", "normal normal 500 1rem/1.5vw Karla", "uppercase");
    }
}
function dateOff(div, i) {
    let dateNumBox = div.querySelector("div");
    dateNumBox.classList.remove("active");
    if(currentMonth && currentDay) {
        getCurrentDate(i);
        changeStyle(currentMonth, "transparent", "#333", "normal normal 300 1rem/2vw Karla", "lowercase");
        changeStyle(currentDay, "transparent", "#333", "normal normal 300 1rem/1.5vw Karla", "lowercase");
        currentMonth = currentDay = null;
    }
}

//마우스, 터치에 따라 월, 요일 강조가 생기거나 없어지는 함수 실행
divs.forEach((div, i) => {
    div.addEventListener("mouseenter", () => dateOn(div, i));
    div.addEventListener("mouseleave", () => dateOff(div, i));
    div.addEventListener("touchstart", (event) => {
        event.preventDefault();
        dateOn(div, i);
    });
    div.addEventListener("touchend", (event) => {
        event.preventDefault();
        dateOff(div,i);
    });
    div.addEventListener("click", () => dateOff(div, i));
});


    
