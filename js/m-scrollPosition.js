//방금 전에 확대해서 봤던 이미지가 맨 위에 오도록 
document.addEventListener("DOMContentLoaded", () => {
    let scrollPosition = localStorage.getItem("scrollPosition");
    if(scrollPosition !== null) {
        window.scrollTo(0, scrollPosition);
    }
});

//새로 고침하면 top으로 돌아가기
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
})

//제목 누르면 top으로 돌아가기 
let title = document.querySelector("#title");
title.addEventListener("click", () => {
    window.location.reload();
    window.scrollTo(0, 0);
});