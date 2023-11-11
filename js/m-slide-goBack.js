//전체가 다 로드되고 나면 실행
document.addEventListener("DOMContentLoaded", function() {
    //back 버튼 불러오기
    const backBttn = document.querySelector("#back");
    //back 버튼 누르면 뒤로 가기(스크롤 위치 그대로)
    backBttn.addEventListener("click", () => {
        window.history.back();
    });
    //제목 불러오기 
    const pageTitle = document.querySelector("#title");
    //제목 누르면 뒤로 가기 (스크롤 위치 초기화)
    pageTitle.addEventListener("click", () => {
        window.location.href = "index-mobile.html";
    });
});