const backBttn = document.querySelector("#back");
backBttn.addEventListener("click", () => {
    window.history.back();
});
const pageTitle = document.querySelector("#title");
pageTitle.addEventListener("click", () => {
    window.location.href = "index.html";
})