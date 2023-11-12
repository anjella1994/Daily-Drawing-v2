const prevBttn = document.querySelector("#prev");
const nextBttn = document.querySelector("#next");

//슬라이드 업데이트 함수 선언
function updateSlide (clickedDivNum){
    //업데이트 전 월 저장
    let currentMonth = m;
    //컨텐츠 업데이트 
    localStorage.setItem("clickedDivNum", clickedDivNum);
    getDate(clickedDivNum);
    updateCurrentDate(currentFullDate); //현재 월(m) 바뀜 
    inputTitle(clickedDivNum);
    inputImage(currentFullDate);
    //업데이트 후 월 바뀌었으면 새로고침(날짜 박스에 걸린 이벤트 함수 해제했다가 재연결하기 위해서)
    if(currentMonth !== m) {
        window.location.reload();
    }
}

//화살표 클릭 시 슬라이드 이동 함수 선언
function goPrev() {
    clickedDivNum = (clickedDivNum !== 0) ? clickedDivNum - 1 : 673;
    updateSlide(clickedDivNum);
}
function goNext() {
    clickedDivNum = (clickedDivNum !== 673) ? clickedDivNum + 1 : 0;
    updateSlide(clickedDivNum);
}

//슬라이드 이동하기
prevBttn.addEventListener("click", goPrev);
nextBttn.addEventListener("click", goNext);