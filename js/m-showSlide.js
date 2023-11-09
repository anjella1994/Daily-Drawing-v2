document.addEventListener("DOMContentLoaded", function() {
    const calendarDivs = document.querySelectorAll("#calendar div");
    calendarDivs.forEach(function(div, index) {
        div.addEventListener("click", function(){
            //클릭한 div의 인덱스를 localstorage에 저장
            localStorage.setItem("clickedDivNum", index);
            //이미지 슬라이드 페이지로 이동
            window.location.href = "index-mobile-slide.html";
        });
    });
});

