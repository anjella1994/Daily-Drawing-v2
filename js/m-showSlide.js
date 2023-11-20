//---------------------- 메인 이벤트 핸들러 ----------------------//

//캘린더의 그림이나 제목 클릭하면 해당 슬라이드로 이동
document.addEventListener("DOMContentLoaded", function() {
    calendarBoxes.forEach((calendarBox, i) => {
        //그림이나 제목을 클릭했을 때에만 이동
        if (i % 4 == 2 || i % 4 == 3) {
            calendarBox.addEventListener("click", function(){
                //클릭한 div의 인덱스를 localstorage에 저장
                localStorage.setItem("drawingIndex", i);
                //이미지 슬라이드 페이지로 이동
                window.location.href = "index-mobile-slide.html";
            });
        }
    });
});