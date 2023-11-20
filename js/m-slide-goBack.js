document.addEventListener("DOMContentLoaded", function() {
    //back 버튼 누르면 뒤로 가기(스크롤 위치 그대로)
    backBttn.addEventListener("click", () => {
        window.history.back();
    });
    //제목 누르면 뒤로 가기 (스크롤 위치 초기화)
    pageTitle.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});