//슬라이드 이동 함수 선언
function navigate(isRight) {
    if (isRight) {
        rowNum = (rowNum == 673) ? 0 : rowNum + 1; //true 입력하면 오른쪽 이동 
    } else {
        rowNum = (rowNum == 0) ? 673 : rowNum - 1; //false 입력하면 왼쪽 이동 
    }
    localStorage.setItem("clickedDivNum", rowNum * 4);
    getDate(rowNum);
    updateCurrentDate(currentFullDate);
    inputImage(currentFullDate);
    inputTitle(rowNum);
    window.location.reload();
};

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

//클릭 시 왼쪽, 오른쪽 이동
leftArrow.addEventListener("click", () => navigate(false));
rightArrow.addEventListener("click", () => navigate(true));

//터치 시 왼쪽, 오른쪽 이동 
document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});
document.addEventListener("touchend", (e) => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;
    if (Math.abs(touchStartY - touchEndY < 10)) { //수직 이동이 거의 없을 때만 실행 
        if (touchStartX - touchEndX > 50) {
            navigate(true);
        } else if (touchEndX - touchStartX > 50) {
            navigate(false);
        }
    }
});