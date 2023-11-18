//---------------------- 메인 이벤트 핸들러 ----------------------//

// 1단계 : 검색창 활성화, 비활성화 세팅 

// 검색창 포커스에 따른 조절 
searchBox.addEventListener("focus", () => {
    //검색어가 있고, 검색 결과가 있을 때 검색 목록 나타남
    searchResults.style.display = (searchBox.value !== "" && searchResults.innerHTML !== "") ? "block" : "none";    
});
// 검색창 외 다른 영역 클릭에 따른 조절
document.addEventListener("click", (event) => {
    if(event.target !== searchResults && event.target !== searchBox && event.target !== searchEnter) {
        searchResults.style.display = "none";
    }
});

// 2단계 : 검색 목록 업데이트 
searchBox.addEventListener("input", () => {
    // 검색어 인식
    searchedText = searchBox.value.toLowerCase();
    if(searchedText !== ""){
        //검색어가 있으면, 검색 목록 업데이트
        updateResults(searchedText);  
        //검색 결과가 있으면, 검색 목록 나타나기 
        searchResults.style.display = searchResults.innerHTML !== "" ? "block" : "none";
    } else {
        searchResults.style.display = "none";
    }
});

// 3단계 : 검색 목록 탐색 후 선택 
// 키보드로 탐색 및 선택하는 경우 (화살표 업다운, 엔터)
document.addEventListener("keydown", (event) => {
    if (searchBox.value !== "" && searchResults.innerHTML !== "") {
        focusTitle(event);
        if(!isSelected) {
            selectTitle(event);
        }
    }
});
// 마우스로 선택하는 경우 (클릭))
titleDivs.forEach((titleDiv) => {
    if(!isSelected) {
        titleDiv.addEventListener("click", () => {
            searchBox.value = titleDiv.textContent;
            searchResults.style.display = "none";
            isSelected = true;
        });
    }
});

// 4단계 : 검색 싷행 
// 키보드로 엔터 치는 경우  
document.addEventListener("keydown", (event) => {
    if(isSelected) {
        if(event.key === "Enter") {
            isSearched = true;
            search();
        }
    }
});
// 마우스로 엔터 버튼 클릭하는 경우
searchEnter.addEventListener("click", () => {
    isSearched = true;
    search();
});

//---------------------- 주요 함수 선언 ----------------------//

// 검색 목록 업데이트
function updateResults(text) {
    // '선택함' 상태 취소 
    isSelected = false;
    // 검색 목록 초기화 
    searchResults.innerHTML = "";
    // 검색 목록 생성
    if(text !== "") {
        // 검색어 포함한 제목만 목록에 띄우기
        titles.forEach((title, i) => {
            if(title.includes(text)) {
                searchResults.appendChild(titleDivs[i]);
            }
        });       
    }
    // 검색 결과 목록 배열로 선언
    searchedTitleDivs = searchResults.querySelectorAll("div");
    // 사용자가 가리키는 항목의 인덱스 -1로 초기화
    searchIndex = -1;
}

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
    if (event.key === "Enter") {
        if (searchIndex > -1) {
            //선택한 텍스트로 검색창 치우기
            searchBox.value = searchedTitleDivs[searchIndex].textContent;
            //검색 목록 사라지기
            searchResults.style.display = "none";
            //'선택함' 상태 변경
            isSelected = true;
        }
    } 
}

// 검색 실행하기 
function search() {
    if(isSelected && isSearched) {
        searchedText = searchBox.value.toLowerCase();
        titles.forEach((title, i) => {
            if(title === searchedText) {
                updateSlide(i);
                searchBox.value = "";
        searchResults.innerHTML = "";
        isSearched = false;
            }
        });
    }
}








