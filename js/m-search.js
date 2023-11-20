//---------------------- 메인 이벤트 핸들러 ----------------------//

//search, searchOnEnter 함수는 html에서 바로 연결

//view all 누르면 검색했던 결과 사라지고 원래대로
viewAllBttn.addEventListener("click", viewAll);

//---------------------- 주요 함수 선언 ----------------------//

//행 토글 함수 (i : 행 넘버, displayType : "block" 또는 "none")
function toggleRow (i, displayType) { 
    for (let j = i * 4; j < (i * 4 + 4); j++) {
        calendarBoxes[j].style.display = displayType;
    }
}

//검색 함수
function search() {
    //모든 그림 초기화
    for (i = 0; i < 674; i++) {
        toggleRow(i, "block");
    }
    //검색어 인식
    let searchText = searchBox.value.toLowerCase();;
    //검색어가 있으면 검색 실행 
    if (searchText !== ""){ 
        //검색된 그림의 개수 변수 선언
        let resultCount = 0;
        //그림 다 없앤 후 
        for(let i = 0; i < 674; i++) {
            toggleRow(i, "none");
        }
        //검색어 포함한 제목의 그림만 나타나기
        titles.forEach((title, i) => {
            if(title.includes(searchText)) {
                toggleRow(i, "block");
                resultCount++;
            }
        })
        //월 구분선 없애기
        boundaryBoxes.forEach((boundaryBox) => {
            boundaryBox.style.borderBottom = "1px solid #ccc";
        });
        //검색 결과 개수에 맞게 전체 높이 줄이기
        main.style.height = `${resultCount * 15}vw`;
        main.style.overflow = "hidden";
        //연, 월 표시 없애고 스크롤 맨 위로 이동
        updateDate("","")
        //맨 위로 이동해서 검색된 이미지만 보이게
        window.scrollTo(0,0); 
        //상태 변경 '검색 중'
        searchOn = true;
    }
    //검색창 초기화 
    searchBox.value = "";
}

//엔더 쳤을 때에도 search 함수 실행 
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

//검색 완료 후 원래대로 
function viewAll() {
    //674행 모두 나타나기
    for(let i = 0; i < 674; i++) {
        toggleRow(i, "block");
    }
    //월 구분선 원래대로
    boundaryBoxes.forEach((boundaryBox) => {
        boundaryBox.style.borderBottom = "";
    });
    //전체 높이 원래대로
    main.style.height = "";
    main.style.overflow = "visible";
    //연, 월 표시 원래대로
    updateDateByScroll();
    //상태 변경 '검색 완료'
    searchOn = false;
}





