//-------------------------------------- 1단계 : 검색목록 활성화, 비활성화 --------------------------------------//

//----------------- 이벤트 핸들러 -----------------//

//검색창 활성화 시 - 검색어 있고 검색 결과 있으면 나타남
searchBox.addEventListener("focus", () => {
    searchResults.style.display = (searchBox.value !== "" && searchResults.innerHTML !== "") ? "block" : "none";
});
//검색청 비활성화 시 - 사라짐 
document.addEventListener("click", (event) => {
    if(event.target !== searchResults && event.target !== searchBox && event.target !== searchEnter) {
        searchResults.style.display = "none";
    }
});

//----------------------------------------- 2단계 : 검색목록 업데이트 -----------------------------------------//

//----------------- 이벤트 핸들러 -----------------//

searchBox.addEventListener("input", () => {
    //검색어 인식
    searchedText = searchBox.value.toLowerCase();
    if(searchedText !== ""){
        //검색어가 있으면, 검색 목록 업데이트
        updateResults(searchedText);  
        //검색 결과가 있으면, 검색 목록 나타나기 
        searchResults.style.display = searchResults.innerHTML !== "" ? "block" : "none";
    } else {
        //검색어 없거나 검색 결과 없으면 검색 목록 나타나지 않음
        searchResults.style.display = "none";
    }
});

//------------------- 주요 함수 -------------------//

function updateResults(text) {
    //검색 목록 초기화 
    searchResults.innerHTML = "";
    //기존 검색 목록 없어지면서 '선택함' 상태 취소 
    isSelected = false;
    //검색 목록 생성
    if(text !== "") {
        titles.forEach((title, i) => {
            if(title.includes(text)) {
                searchResults.appendChild(titleDivs[i]);
            }
        });       
    }
    //검색 결과 목록 배열로 선언
    searchedTitleDivs = searchResults.querySelectorAll("div");
    //사용자가 가리키는 항목의 인덱스 -1로 초기화
    searchIndex = -1;
}

//--------------------------------------- 3단계 : 검색 목록 탐색 및 선택 ---------------------------------------//

//----------------- 이벤트 핸들러 -----------------//

// 키보드로 조작하는 경우 (화살표 업다운, 엔터)
document.addEventListener("keydown", (event) => {
    if(searchBox.value !== "" && searchResults.innerHTML !== "" && !isSelected) {
        focusTitle(event); //탐색
        selectTitle(event); //선택
    }
});

// 마우스로 조작하는 경우 (클릭)
titleDivs.forEach((titleDiv) => {
    if(!isSelected) {
        titleDiv.addEventListener("click", () => {
            searchBox.value = titleDiv.textContent;
            searchResults.style.display = "none";
            isSelected = true;
        });
    }
});

//------------------- 주요 함수 -------------------//

// 사용자가 키보드로 가리키는 항목 표시하기 
function focusTitle(event) {
    // 스타일 초기화 
    searchedTitleDivs.forEach((titleDiv) => {
        titleDiv.classList.remove("active");
    });
    // 사용자가 가리키는 항목 스타일 변경
    if (event.key === "ArrowDown") {
        //down 키
        event.preventDefault();
        if (searchIndex > -1) {
            searchedTitleDivs[searchIndex].classList.remove("active");
        }
        searchIndex ++;
        if (searchIndex >= searchedTitleDivs.length) {
            searchIndex = 0;
        }
        searchedTitleDivs[searchIndex].classList.add("active");
    } else if (event.key === "ArrowUp") {
        //up 키
        event.preventDefault();
        if (searchIndex > -1) {
            searchedTitleDivs[searchIndex].classList.remove("active");
        }
        searchIndex --;
        if (searchIndex < 0) {
            searchIndex = searchedTitleDivs.length - 1;
        }
        searchedTitleDivs[searchIndex].classList.add("active");
    }
}

// 사용자가 키보드로 가리키는 항목 선택하기
function selectTitle(event) {
    if (event.key === "Enter" && searchIndex > -1) {
        //선택한 텍스트로 검색창 채우기
        searchBox.value = searchedTitleDivs[searchIndex].textContent;
        //검색 목록 사라지기
        searchResults.style.display = "none";
        //'선택함' 상태 변경
        isSelected = true;
        //enter키 이벤트에 연결된 search 함수 끊었다가 다시 연결 (선택하자마자 search함수까지 실행되어버리는 문제 방지)
        document.removeEventListener("keydown", searchByEnter);
        document.addEventListener("keydown", searchByEnter);
    }
} 

//------------------------------------------ 4단계 : 검색 실행하기 ------------------------------------------//

//----------------- 이벤트 핸들러 -----------------//

// 키보드로 엔터 치는 경우  
document.addEventListener("keydown", searchByEnter);

// 마우스로 엔터 버튼 클릭하는 경우
searchEnter.addEventListener("click", () => {
    if(isSelected){
        isSearched = true;
        search();
    }
});

//------------------- 주요 함수 -------------------//

function search() {
    //검색어 선택했고, 엔터 눌렀을 때만 실행
    if(isSelected && isSearched) {
        //최종으로 선택한 검색어 인식 
        searchedText = searchBox.value.toLowerCase();
        //검색어를 제목으로 가진 슬라이드로 이동
        titles.forEach((title, i) => {
            if(title === searchedText) {
                updateSlide(i);
                //검색창 초기화
                searchBox.value = "";
                searchResults.innerHTML = "";
                isSelected = false;
                isSearched = false;
            }
        });
    }
}

function searchByEnter(event) {
    if(isSelected) {
        if(event.key === "Enter") {
            isSearched = true;
            search();
        }
    }
}