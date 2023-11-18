//---------------------- 메인 이벤트 핸들러 ----------------------//

// 검색 : html에서 search 함수 바로 연결

// 검색 취소
document.addEventListener("click", (event) => {
    if(event.target.id !== "searchBox" && event.target.id !== "searchEnter") {
        resetSearch();
    } 
});

//---------------------- 주요 함수 선언 ----------------------//

//검색하기
function search() {
    //이전 검색 취소
    resetSearch();
    //새로운 검색어 인식 
    let searchText = document.querySelector("#searchBox").value.toLowerCase();
    //검색어가 인식된 경우, 
    if (searchText !== ""){ 
        //날짜 아닌 박스부터 전부 가리고
        nonDateBoxes.forEach((nonDateBox) => {
            nonDateBox.classList.add("notResult");
        })
        //날짜 중에서는 검색 결과 빼고 나머지 가리기
        dateBoxes.forEach((dateBox, i) => {
            dateBox.classList.add(titles[i].includes(searchText) ? "result" : "notResult");
        })
    }
}

//엔터 키 눌렀을 때 검색하기
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

//검색 취소하기
function resetSearch() {
    nonDateBoxes.forEach((nonDateBox) => {
        nonDateBox.classList.remove("notResult");
    });
    dateBoxes.forEach((dateBox, i) => {
        dateBox.classList.remove("result", "notResult");
    });
}

