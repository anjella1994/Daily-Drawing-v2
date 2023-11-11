const prevBttn = document.querySelector("#prev");
const nextBttn = document.querySelector("#next");

//슬라이드 업데이트 함수 선언
function updateSlide() {
    localStorage.setItem("clickedDivNum", rowNum * 4);
    getDate(rowNum);
    updateCurrentDate(currentFullDate);
    inputTitle(rowNum);
    inputImage(currentFullDate);
}

//슬라이드 좌우 이동 함수 선언
function goPrev() {
    rowNum = (rowNum == 0) ? 673 : rowNum - 1;
    updateSlide(rowNum);
};
function goNext() {
    rowNum = (rowNum == 673) ? 0 : rowNum + 1;
    updateSlide(rowNum);
};

//클릭 시 왼쪽, 오른쪽 이동
prevBttn.addEventListener("click", goPrev);
nextBttn.addEventListener("click", goNext);

//터치 시 왼쪽, 오른쪽 이동 
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

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
