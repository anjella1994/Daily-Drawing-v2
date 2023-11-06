const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

function goLeft() {
    if(rowNum == 0) {
        rowNum = 673;
    } else {
        rowNum--;
    }
    localStorage.setItem("clickedDivNum", rowNum * 4);
    getDate(rowNum);
    updateCurrentDate(currentFullDate);
    inputImage(currentFullDate);
    inputTitle(rowNum);
    window.location.reload();
}

function goRight() {
    if(rowNum == 673) {
        rowNum = 0;
    } else {
        rowNum++;
    }
    localStorage.setItem("clickedDivNum", rowNum * 4);
    getDate(rowNum);
    updateCurrentDate(currentFullDate);
    inputImage(currentFullDate);
    inputTitle(rowNum);
    window.location.reload();
}

leftArrow.addEventListener("click", goLeft);
rightArrow.addEventListener("click", goRight);

//터치 동작 추가

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function(e){
    touchStartX = e.touches[0].clientX;
});
document.addEventListener("touchend", function(e){
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 100) {
        goRight();
    } else if (touchEndX - touchStartX > 100) {
        goLeft();
    }
}

