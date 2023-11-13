const nonDateBoxes = document.querySelectorAll("div.image.empty")

//검색 결과 표시 함수 생성
function search() {
    let searchText = document.querySelector("#searchText").value.toLowerCase();
    searchReset();
    if (searchText !== ""){ //아무것도 안 쓰면 실행 안 함
        //제목에 검색 텍스트가 포함된 이미지 빼고 모든 박스에 배경색 넣기
        nonDateBoxes.forEach((nonDateBox) => {
            nonDateBox.style.backgroundColor = "rgba(221, 221, 221, 0.9)";
        })
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

//검색 결과 표시 리셋 함수 
function searchReset() {
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


//엔더 쳤을 때에도 search 함수 실행 
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}

//화면 아무데나 누르면 검색으로 인해 바뀐 스타일 초기화
document.addEventListener("click", function(event) {
    //검색창을 클릭했을 때에는 실행 안 함
    if(event.target.id === "searchText" || event.target.id === "search") {
        return;
    }
    searchReset();
})