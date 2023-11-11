document.addEventListener("DOMContentLoaded", () => {
    //새로 고침하면 top으로 돌아가기
    window.addEventListener("beforeunload", () => {
        window.scrollTo(0, 0);
    })
    //제목 누르면 top으로 돌아가기 
    pageTitle.addEventListener("click", () => {
        window.location.reload();
        window.scrollTo(0, 0);
    });
});
