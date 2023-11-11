const dateNumBoxes = document.querySelectorAll(".image div");
document.addEventListener("DOMContentLoaded", function() {
    //마우스 갖다대면 생기는 날짜 박스
    dateNumBoxes.forEach(function(dateBox, index) { 
        function goToSlide() {
            //클릭한 div의 인덱스를 localstorage에 저장
            localStorage.setItem("clickedDivNum", index);
            //이미지 슬라이드 페이지로 이동 
            window.location.href = "index-pc-slide.html";
        }
        dateBox.addEventListener("click", goToSlide);
        dateBox.addEventListener("touchstart", goToSlide);    
    });
});