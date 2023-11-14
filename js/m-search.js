let searchOn = false;

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

function clearInput() {
    document.querySelector("#searchText").value = "";
}

function search() {
    //일단 모든 그림 초기화
    titleBoxes.forEach((titleBox, i) => {
        showRow(i);
    });
    let searchText = document.querySelector("#searchText").value.toLowerCase();;
    if (searchText !== ""){ //아무것도 안 쓰면 실행 안 함
        //검색된 그림만 나오기
        let resultCount = 0;
        titleBoxes.forEach((titleBox, i) => {
            hideRow(i);
            const title = titleBox.textContent.toLowerCase();
            if (title.includes(searchText)) {
                showRow(i);
                resultCount++;
            }
        });
        //월 구분선 없애기
        let boundaryBoxes = document.querySelectorAll(".last, .first");
        boundaryBoxes.forEach((boundaryBox) => {
            boundaryBox.style.borderBottom = "1px solid #ccc";
        });
        //검색 결과 개수에 맞게 전체 높이 줄이기
        main.style.height = `${resultCount * 15}vw`;
        main.style.overflow = "hidden";
        //연, 월 표시 없애기
        yearBox.textContent = "";
        monthBox.textContent = "";
        window.scrollTo(0,0); //맨 위로 이동해서 남은 이미지만 보이게
        //상태 '검색 중'
        searchOn = true;
    }
    clearInput();
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
    //모든 그림 다시 나오기
    titleBoxes.forEach((titleBox, i) => {
        showRow(i);
    });
    //월 구분선 그대로
    let boundaryBoxes = document.querySelectorAll(".last, .first");
    boundaryBoxes.forEach((boundaryBox) => {
        boundaryBox.style.borderBottom = "";
    });
    //전체 높이 원래대로
    main.style.height = "";
    main.style.overflow = "visible";
    //연, 월 표시 그대로 
    updateDateByScroll();
    //상태 '검색 끝'
    searchOn = false;
});

