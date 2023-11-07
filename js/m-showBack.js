document.addEventListener('DOMContentLoaded', function() {
    const backBttn = document.querySelector("#back");
    backBttn.addEventListener("click", () => {
        window.history.back();
        let scrollPosition = localStorage.getItem('scrollPosition');
        if(scrollPosition) {
            window.scrollTo(0, scrollPosition);
        }
    });
});