//---------------------- 메인 이벤트 핸들러 ----------------------//

//마우스 오버(or 터치)에 따라 일, 월, 요일 강조가 생기거나 없어짐 
calendarBoxes.forEach((box, i) => {
    //박스가 날짜 박스일 때
    if (isDateBox(box)) {
        //마우스 오버하면 강조 
        box.addEventListener("mouseenter", () => dateOn(box, i));
        box.addEventListener("mouseleave", () => dateOff(box, i));
        //터치하면 강조
        box.addEventListener("touchstart", (event) => {event.preventDefault(); dateOn(box, i);});
        box.addEventListener("touchend", (event) => {event.preventDefault(); dateOff(box,i);});
        //클릭하면 꺼짐 (슬라이드 페이지로 갔다가 돌아왔을 때 색이 여전히 칠해져 있는 것 방지)
        box.addEventListener("click", () => dateOff(box, i));
    }
});
//(참고) calendarBox 쓰는 이유는, 행과 열 계산이 훨씬 쉽기 때문

//---------------------- 주요 함수 선언 ----------------------//

//박스가 날짜 박스인지 확인하기 
function isDateBox(box) {
    for (let i = 0; i < dateBoxes.length; i++) {
        if (box === dateBoxes[i]) {
            return true;
        }
    }
    return false;
}

//일, 월, 요일 강조하기
function dateOn(box, i) {
    //날짜 스타일 수정 
    box.querySelector("div").classList.add("active");
    //월, 요일 스타일 수정
    getCurrentDate(i);
    currentMonthBox.classList.add("active");
    currentDayBox.classList.add("active");
}

//일, 월, 요일 강조 취소하기 
function dateOff(box, i) {
    //날짜 스타일 제거 
    box.querySelector("div").classList.remove("active");
    if(currentMonthBox && currentDayBox) {
        getCurrentDate(i);
        currentMonthBox.classList.remove("active");
        currentDayBox.classList.remove("active");
        currentMonthBox = currentDayBox = null;
    }
}

//박스에 해당하는 월 박스, 요일 박스 찾기
function getCurrentDate (i) { 
    //행 번호 (0부터 시작)
    const rowNumber = Math.floor(i / 40);
    //열 번호 (0부터 시작)
    const columnNumber = i % 40;
    //월 - 동일한 행 1열
    currentMonthBox = calendarBoxes[rowNumber * 40 + 1];
    //일 - 동일한 열 0행
    currentDayBox = calendarBoxes[columnNumber];
}