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
    if (searchText !== ""){ //아무것도 안 쓰면 실행 안 함
        titleBoxes.forEach((titleBox, i) => {
            hideRow(i);
            const title = titleBox.textContent.toLowerCase();
            if (title.includes(searchText)) {
                showRow(i);
            }
        });
        window.scrollTo(0,0); //맨 위로 이동해서 남은 이미지만 보이게
    }
}

//엔더 쳤을 때에도 search 함수 실행 
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

//view all 누르면 검색했던 결과 사라지고 원래대로
const viewAllBttn = document.querySelector("#viewAll");
viewAllBttn.addEventListener("click", () => {
    titleBoxes.forEach((titleBox, i) => {
        showRow(i);
    });
});

