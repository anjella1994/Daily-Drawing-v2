//'검색 중' 상태 나타내는 변수 선언
let searchOn = false;

//행 나타내기 숨기기 토글 함수 선언 
//i는 행 넘버, displayType은 "block" 또는 "none"
function toggleRow (i, displayType) { 
    for (let j = i * 4; j < (i * 4 + 4); j++) {
        calendarDivs[j].style.display = displayType;
    }
}

//검색창 내용 초기화 함수 
function clearInput() {
    document.querySelector("#searchText").value = "";
}

//검색 함수
function search() {
    //일단 모든 그림 초기화
    titleBoxes.forEach((titleBox, i) => {
        toggleRow(i, "block");
    });
    //검색어 인식
    let searchText = document.querySelector("#searchText").value.toLowerCase();;
    //검색어에 내용이 있을 경우 검색 실행 
    if (searchText !== ""){ 
        //검색된 그림만 나오기
        let resultCount = 0;
        titleBoxes.forEach((titleBox, i) => {
            toggleRow(i, "none");
            const title = titleBox.textContent.toLowerCase();
            if (title.includes(searchText)) {
                toggleRow(i, "block");
                resultCount++;
            }
        });
        //월 구분선 없애기
        document.querySelectorAll(".last, .first").forEach((boundaryBox) => {
            boundaryBox.style.borderBottom = "1px solid #ccc";
        });
        //검색 결과 개수에 맞게 전체 높이 줄이기
        main.style.height = `${resultCount * 15}vw`;
        main.style.overflow = "hidden";
        //연, 월 표시 없애고 스크롤 맨 위로 이동
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
        toggleRow(i, "block");
    });
    //월 구분선 그대로
    document.querySelectorAll(".last, .first").forEach((boundaryBox) => {
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

