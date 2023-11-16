const nonDateBoxes = document.querySelectorAll("div.image.empty")

//가려졌던 박스 리셋하는 함수
function resetOthers() {
    nonDateBoxes.forEach((nonDateBox) => {
        nonDateBox.style.backgroundColor = ""; //빈 문자열로 설정하면 원래 스타일로 돌아감
    });
    dateBoxes.forEach((dateBox, i) => {
        dateBox.style.backgroundColor = "";
        dateBox.style.border= "";
        dateBox.style.zIndex = "";
        let dateNumBox = dateBox.querySelector("div");
        dateNumBox.style.lineHeight = "";
    });
}

//검색 실행하면 검색 결과 제외한 박스 가리기
function search() {
    //일단 다 초기화
    resetOthers();
    //검색어 인식 
    let searchText = document.querySelector("#searchText").value.toLowerCase();
    //검색창에 내용을 입력한 경우, 검색 결과 제외하고 배경으로 가리기
    if (searchText !== ""){ 
        //날짜 아닌 건 전부 가리고
        nonDateBoxes.forEach((nonDateBox) => {
            nonDateBox.style.backgroundColor = "rgba(221, 221, 221, 0.9)";
        })
        //날짜 중에서는 검색 결과 아닌 걸 인식해서 가림
        dateBoxes.forEach((dateBox, i) => {
            if(!titles[i].includes(searchText)) {
                dateBox.style.backgroundColor = "rgba(221, 221, 221, 0.9)";
            } else {
                dateBox.style.border = "1px solid #D15837";
                dateBox.style.zIndex = 10;
                let dateNumBox = dateBox.querySelector("div");
                dateNumBox.style.lineHeight = "calc(2vw - 2px)";
            }
        })
    }
}

//엔더 쳤을 때에도 search 함수 실행 
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

//화면 아무데나 누르면 검색으로 인해 바뀐 스타일 초기화
document.addEventListener("click", (event) => {
    if(event.target.id !== "searchText" && event.target.id !== "search") {
        resetOthers();
    }
})