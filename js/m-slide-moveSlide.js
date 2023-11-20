//---------------------- 메인 이벤트 핸들러 ----------------------//

//버튼 클릭 시 슬라이드 이동
prevBttn.addEventListener("click", goPrev);
nextBttn.addEventListener("click", goNext);

//좌우 방향 손가락으로 스치면 슬라이드 이동
document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});
document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    if (Math.abs(touchStartY - touchEndY) < 20) { //수직 이동이 거의 없을 때만 실행 
        if (touchStartX - touchEndX > 50) {
            goPrev();
        } else if (touchEndX - touchStartX > 50) {
            goNext();
        }
    }
});

//---------------------- 주요 함수 선언 ----------------------//

//슬라이드 좌우 이동 함수 
function goPrev() {
    rowNum = (rowNum == 0) ? 673 : rowNum - 1;
    localStorage.setItem("drawingIndex", rowNum * 4);
    fillSlide(rowNum);
};
function goNext() {
    rowNum = (rowNum == 673) ? 0 : rowNum + 1;
    localStorage.setItem("drawingIndex", rowNum * 4);
    fillSlide(rowNum);
};


