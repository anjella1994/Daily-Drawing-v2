document.addEventListener("DOMContentLoaded", function() {
    //back 버튼 불러오기
    const backBttn = document.querySelector("#back");
    //back 버튼 누르면 뒤로 가기(캘린더 페이지로) 
    backBttn.addEventListener("click", () => {
        window.location.href = "index.html";
        // localStorage.setItem("scrollPosition", 0.15 * window.innerWidth * rowNum);
    });
});