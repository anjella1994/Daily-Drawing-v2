const calendar = document.getElementById("calendar");
const divs = calendar.querySelectorAll("#calendar > div");

let currentMonth;
let currentDay;

function changeStyle (element, backgroundColor, color, font, textTransform) {
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
    element.style.font = font;
    element.style.textTransform = textTransform;
}

divs.forEach((div, i) => {
    div.addEventListener("mouseenter", () => {
        if(div.classList.contains("image") && !div.classList.contains("empty")){
            //행 번호 (0부터 시작)
            const rowNumber = Math.floor(i / 40); 
            //열 번호 (0부터 시작)
            const columnNumber = i % 40;
            //월 빨간색 표시
            currentMonth = divs[rowNumber * 40 + 1];
            changeStyle(currentMonth, "#D15837", "white", "normal italic 500 1rem/2vw Karla", "uppercase");
            //요일 빨간색 표시
            currentDay = divs[columnNumber];
            changeStyle(currentDay, "#D15837", "white", "normal italic 500 1rem/1.5vw Karla", "uppercase");
        }
    });
    div.addEventListener("mouseleave", () => {
        if(currentMonth && currentDay) {
            changeStyle(currentMonth, "transparent", "#333", "normal normal 300 1rem/2vw Karla", "lowercase");
            changeStyle(currentDay, "transparent", "#333", "normal normal 300 1rem/1.5vw Karla", "lowercase");
            currentMonth = currentDay = null;
        }
    })
});     
