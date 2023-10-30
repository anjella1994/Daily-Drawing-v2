const nav = document.querySelector("nav");

//드롭다운 클릭 시 나타나기 & 사라지기
const yearMonth = document.querySelector("#yearMonth");
let navOn = false;
yearMonth.addEventListener("click", function() {
    if(navOn) {
        nav.style.height = "0px";
        navOn = false;
    } else {
        nav.style.height = "90vw";
        navOn = true;
    }
});

//드롭다운 내 연, 월 클릭하면, 해당 날짜로 스크롤 이동
const navDivs = document.querySelectorAll("nav div.month")
for (let i = 0 ; i < 23 ; i++) {
    navDivs[i].addEventListener("click", function() {
        const scrollTo = monthBoundary[i];
        window.scrollTo(0, scrollTo);
        nav.style.height = "0px";
        navOn = false;
    })
}