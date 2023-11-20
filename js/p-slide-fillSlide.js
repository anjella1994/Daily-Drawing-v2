//---------------------- 메인 함수 실행 ----------------------//
fillSlide(drawingIndex);

//---------------------- 주요 함수 선언 ----------------------//
//초기 슬라이드 채우기
function fillSlide(i) {
    getDate(i);
    updateCurrentDate(currentFullDate);
    inputTitle(i);
    inputImage(currentFullDate);
}

//---------------------- 서브 함수 선언 ----------------------//

//현재 날짜 표시하기
function updateCurrentDate(date) {
    getDateInfo(date); 
    //연, 월 입력하기 
    yearBox.textContent = y;
    monthBox.textContent = monthNames[m];
    //이전 날짜 스타일 및 내용 초기화 
    dateBoxes.forEach((dateBox) => {dateBox.textContent=""});
    dateBoxes.forEach((dateBox) => dateBox.classList.remove("active"));
    dateBoxes.forEach((dateBox) => dateBox.classList.remove("pointer"));
    //시작 날짜 정한 다음 마지막 날까지 날짜 채우기
    let dateNum = (y == 2020 && m == 5) ? 19 : 1; 
    for (i = 0; i < filledBoxes.length; i++) {
        filledBoxes[i].textContent = dateNum;
        filledBoxes[i].classList.add("pointer");
        dateNum++;
    }
    //현재 날짜 찾아서 스타일 입히기 
    let currentDateBoxNum = startBoxNum + d - 1; 
    dateBoxes[currentDateBoxNum].classList.add("active");
}

//제목 가져오기
function inputTitle(i) {
    imageTitle.textContent = titles[i] !== "" ? titles[i] : "休(day off)";
}  

//그림 가져오기
function inputImage(date) {
    let yy = date.getFullYear().toString().slice(-2);
    let mm = (date.getMonth() + 1).toString().padStart(2,'0');
    let dd = date.getDate().toString().padStart(2,'0');
    imageBox.innerHTML = titles[drawingIndex] !== "" ? `<img src="images/DD-${yy + mm + dd}.jpg">` : "none";
}