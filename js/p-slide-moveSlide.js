const leftArrow = document.querySelector(".prev");
const rightArrow = document.querySelector(".next");

//슬라이드 이동 함수 선언
function goLeft() {
    clickedDivNum--;
    if(clickedDivNum !== 0){
        localStorage.setItem("clickedDivNum", clickedDivNum);
        getDate(clickedDivNum);
        updateCurrentDate(currentFullDate);
        inputTitle(clickedDivNum);
        inputImage(currentFullDate);

        // imageSlide.style.transition = "left 1s";
        // imageSlide.style.left = `${(15 - 36 * clickedDivNum)}vw`;
        
        // setTimeout(() => {
        //     imageSlide.style.transition = "";
        // }, 1000);
    }
};
function goRight() {
    clickedDivNum++;
    if(clickedDivNum !== 673) {
        localStorage.setItem("clickedDivNum", clickedDivNum);
        getDate(clickedDivNum);
        updateCurrentDate(currentFullDate);
        inputTitle(clickedDivNum);
        inputImage(currentFullDate);

        // imageSlide.style.transition = "left 1s";
        // imageSlide.style.left = `${(15 - 36 * clickedDivNum)}vw`;
        
        // setTimeout(() => {
        //     imageSlide.style.transition = "";
        // }, 1000);
    }    
};

leftArrow.addEventListener("click", goLeft);
rightArrow.addEventListener("click", goRight);