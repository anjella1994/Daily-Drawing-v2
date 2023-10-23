const calendar = document.getElementById("calendar");
const divs = calendar.querySelectorAll("#calendar > div");

//월, 요일 빨간 표시

let currentDate;
let index;
let rowNumber; //0행부터 시작 ~ 23행
let columnNumber; //0열 부터 시작 ~ 39열

let currentMonth; 
let currentDay;

divs.forEach((div, i) => {
    div.addEventListener("mouseenter", function() {
        if(div.classList.contains("image") && !div.classList.contains("empty")){
            currentDate = div;
            index = i;
            rowNumber = parseInt ( index / 40 ); //몇 행인지 구하기
            columnNumber = index - 40 * (rowNumber); //몇 열인지 구하기 
            
            currentMonth = divs[rowNumber * 40 + 1];
            currentMonth.style.backgroundColor = "#D15837";
            currentMonth.style.color = "white";
            currentMonth.style.font = "normal italic 500 1rem/2vw Karla";
            currentMonth.style.textTransform = "uppercase";

            currentDay = divs[columnNumber];
            currentDay.style.backgroundColor = "#D15837";
            currentDay.style.color = "white";
            currentDay.style.font = "normal italic 500 1rem/1.5vw Karla";
            currentDay.style.textTransform = "uppercase";
        }
    });
    div.addEventListener("mouseleave", function() {
        if(div.classList.contains("image") && !div.classList.contains("empty")){
            currentDate = null;
            index = null;
            rowNumber = null;
            columnNumber = null;

            currentMonth.style.backgroundColor = "transparent";
            currentMonth.style.color = "#333";
            currentMonth.style.font = "normal normal 300 1rem/2vw Karla";
            currentMonth.style.textTransform = "lowercase";
            currentMonth = null;

            currentDay.style.backgroundColor = "transparent";
            currentDay.style.color = "#333";
            currentDay.style.font = "normal normal 300 1rem/1.5vw Karla";
            currentDay.style.textTransform = "lowercase";
            currentDay = null;
        }        
    });
});


