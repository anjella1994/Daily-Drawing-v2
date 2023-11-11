document.addEventListener("DOMContentLoaded", function() {
    //currentTitles에서 가져온 dateBoxes 배열 그대로 이용
    dateBoxes.forEach(function(dateBox, index) { 
        dateBox.addEventListener("click", function(){
            //클릭한 div의 인덱스를 localstorage에 저장
            localStorage.setItem("clickedDivNum", index);
            //이미지 슬라이드 페이지로 이동 
            window.location.href = "index-pc-slide.html";
        });
    });
});
