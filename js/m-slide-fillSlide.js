//---------------------- 메인 함수 실행 ----------------------//
fillSlide(rowNum);

//---------------------- 주요 함수 선언 ----------------------//
//슬라이드 채우기
function fillSlide(i) {
    updateCurrentDate(i);
    inputTitle(i);
    inputImage(currentDate);
}

//---------------------- 서브 함수 선언 ----------------------//
//날짜 입력
function updateCurrentDate(i) {
    currentDate = dateArray[i];
    yearBox.textContent = currentDate.getFullYear();
    monthBox.textContent = monthNames[currentDate.getMonth()];
    dateBox.textContent = currentDate.getDate();
}
//제목 입력
function inputTitle(i) {
    titleBox.textContent = (titles[i] !== "") ? titles[i] : "休(day off)";
}    
//이미지 가져오기
function inputImage(date) {
    let yy = date.getFullYear().toString().slice(-2);
    let mm = (date.getMonth() + 1).toString().padStart(2,'0');
    let dd = date.getDate().toString().padStart(2,'0');
    imageBox.innerHTML = (titles[rowNum] !== "") ? `<img src="images/DD-${yy + mm + dd}.jpg">` : "<div>(none)</div>";
}