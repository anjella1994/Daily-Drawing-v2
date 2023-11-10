const leftArrow = document.querySelector("#prevBttn");
const rightArrow = document.querySelector("#nextBttn");

//슬라이드 이동 함수 선언
function goLeft() {
    if(clickedDivNum !== 0){
        clickedDivNum--;
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
    if(clickedDivNum !== 674) {
        clickedDivNum++;
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

//뒤로 가기 
const backBttn = document.querySelector("#backBttn");
backBttn.addEventListener("click", () => {
    window.history.back();
});

const pageTitle = document.querySelector("#title");
pageTitle.addEventListener("click", () => {
    window.location.href = "index-pc.html";
})