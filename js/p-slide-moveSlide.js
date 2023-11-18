//---------------------- 메인 이벤트 핸들러 ----------------------//

//버튼 누르면 슬라이드 이동
prevBttn.addEventListener("click", goPrev);
nextBttn.addEventListener("click", goNext);

//뒤로가기 또는 제목 누르면 메인 페이지로 이동
backBttn.addEventListener("click", () => {
    window.history.back();
});
pageTitle.addEventListener("click", () => {
    window.location.href = "index.html";
})

//---------------------- 주요 함수 선언 ----------------------//

//이전 슬라이드로 업데이트하기
function goPrev() {
    drawingIndex = (drawingIndex !== 0) ? drawingIndex - 1 : 673;
    updateSlide(drawingIndex);
}

//다음 슬라이드로 업데이트하기
function goNext() {
    drawingIndex = (drawingIndex !== 673) ? drawingIndex + 1 : 0;
    updateSlide(drawingIndex);
}

//슬라이드 업데이트하기 
function updateSlide(i){
    //업데이트 전, 월 저장
    let currentMonth = m;
    //컨텐츠 업데이트 
    localStorage.setItem("drawingIndex", i);
    fillSlide(i);
    //업데이트 후, 월 바뀌었으면 새로고침(날짜 박스에 걸린 이벤트 함수 해제했다가 재연결하기 위해서)
    if(currentMonth !== m) {
        window.location.reload();
    }
}