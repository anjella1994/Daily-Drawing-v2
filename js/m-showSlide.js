document.addEventListener("DOMContentLoaded", function() {
    const calendarDivs = document.querySelectorAll("#calendar div");
    calendarDivs.forEach(function(div, i) {
        //그림이나 제목을 클릭했을 때에만 이동
        if (i % 4 == 2 || i % 4 == 3) {
            div.addEventListener("click", function(){
                //클릭한 div의 인덱스를 localstorage에 저장
                localStorage.setItem("clickedDivNum", i);
                //이미지 슬라이드 페이지로 이동
                window.location.href = "index-mobile-slide.html";
            });
        }
    });
});

