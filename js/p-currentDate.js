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

//div의 인덱스 넣으면 해당 월, 요일에 해당하는 div를 알 수 있는 함수 
function getCurrentDate (i) { //div의 index
    //행 번호 (0부터 시작)
    const rowNumber = Math.floor(i / 40); 
    //열 번호 (0부터 시작)
    const columnNumber = i % 40;
    //월 빨간색 표시
    currentMonth = divs[rowNumber * 40 + 1];
    currentDay = divs[columnNumber];
}

//div에 해당하는 월, 요일 강조되는 함수 
function divOver(div, i) {
    if(div.classList.contains("image") && !div.classList.contains("empty")){
        getCurrentDate(i);
        //월 빨간색 표시
        changeStyle(currentMonth, "#D15837", "white", "normal normal 500 1rem/2vw Karla", "uppercase");
        //요일 빨간색 표시
        changeStyle(currentDay, "#D15837", "white", "normal normal 500 1rem/1.5vw Karla", "uppercase");
    }
}
//div에 해당하는 월, 요일 강조가 출리는 함수
function divLeave(i) {
    if(currentMonth && currentDay) {
        getCurrentDate(i);
        changeStyle(currentMonth, "transparent", "#333", "normal normal 300 1rem/2vw Karla", "lowercase");
        changeStyle(currentDay, "transparent", "#333", "normal normal 300 1rem/1.5vw Karla", "lowercase");
        currentMonth = currentDay = null;
    }
}

//div에 마우스 올렸을 때 강조, 뗐을 때 강조 풀림, div 터치하면 강조, 터치 떼면 강조 풀림 
divs.forEach((div, i) => {
    div.addEventListener("mouseenter", () => divOver(div, i));
    div.addEventListener("mouseleave", () => divLeave(i));
    div.addEventListener("touchstart", (event) => {
        event.preventDefault();
        divOver(div, i);
    });
    div.addEventListener("touchend", (event) => {
        event.preventDefault();
        divLeave(i);
    });
    div.addEventListener("click", () => divLeave(i));
});


    
