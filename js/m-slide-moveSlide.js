const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

//슬라이드 이동 함수 선언
function goLeft() {
    if(rowNum == 0) {
        rowNum = 673;
    } else {
        rowNum--;
    }
    localStorage.setItem("clickedDivNum", rowNum * 4);
    getDate(rowNum);
    updateCurrentDate(currentFullDate);
    inputTitle(rowNum);
    inputImage(currentFullDate);
    window.location.reload();
};
function goRight() {
    if(rowNum == 673) {
        rowNum = 0;
    } else {
        rowNum++;
    }
    localStorage.setItem("clickedDivNum", rowNum * 4);
    getDate(rowNum);
    updateCurrentDate(currentFullDate);
    inputTitle(rowNum);
    inputImage(currentFullDate);
    window.location.reload();
};

//클릭 시 왼쪽, 오른쪽 이동
leftArrow.addEventListener("click", goLeft);
rightArrow.addEventListener("click", goRight);

//터치 시 왼쪽, 오른쪽 이동 
document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});
document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    if (Math.abs(touchStartY - touchEndY) < 20) { //수직 이동이 거의 없을 때만 실행 
        if (touchStartX - touchEndX > 50) {
            goRight();
        } else if (touchEndX - touchStartX > 50) {
            goLeft();
        }
    }
});
