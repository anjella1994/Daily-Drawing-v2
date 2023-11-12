function showRow(i) { //행 넘버 
    calendarDivs[i * 4].style.display = "block";
    calendarDivs[i * 4 + 1].style.display = "block";
    calendarDivs[i * 4 + 2].style.display = "block";
    calendarDivs[i * 4 + 3].style.display = "block";
}

function hideRow(i) { //행 넘버 
    calendarDivs[i * 4].style.display = "none";
    calendarDivs[i * 4 + 1].style.display = "none";
    calendarDivs[i * 4 + 2].style.display = "none";
    calendarDivs[i * 4 + 3].style.display = "none";
}

function search() {
    let searchText = document.querySelector("#searchText").value.toLowerCase();
    if (searchText !== ""){
        titleBoxes.forEach((titleBox, i) => {
            hideRow(i);
            const title = titleBox.textContent.toLowerCase();
            if (title.includes(searchText)) {
                showRow(i);
            }
        });
        window.scrollTo(0,0);
    }
}

//엔더 쳤을 때에도 search 함수 실행 
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

//언더바는 스크롤이 멈춰 있을 때만 보임
const underBar = document.querySelector("#underBar")
let isScrolling;

window.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling);
    underBar.style.display = "none";

    isScrolling = setTimeout(function() {
        underBar.style.display = "grid";
    }, 300);
});