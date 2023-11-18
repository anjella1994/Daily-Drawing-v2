//---------------------- 메인 이벤트 핸들러 ----------------------//

document.addEventListener("DOMContentLoaded", function() {
    //마우스 오버 시 나타나는 날짜 텍스트 클릭하면
    dateNums.forEach((dateNum, i) => {
        dateNum.addEventListener("click", () => goToSlide(i));
        dateNum.addEventListener("touchstart", () => goToSlide(i));    
    });
});

//---------------------- 주요 함수 선언 ----------------------//

//슬라이드 페이지로 이동하기
function goToSlide(i) {
    //클릭한 dateBox의 인덱스를 localstorage에 저장
    localStorage.setItem("drawingIndex", i);
    //이미지 슬라이드 페이지로 이동 
    window.location.href = "index-pc-slide.html";
}