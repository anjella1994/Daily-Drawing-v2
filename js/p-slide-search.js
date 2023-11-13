const searchResults = document.querySelector("#searchResults");
const searchTextBox = document.querySelector("#searchText");

//검색어 입력하면 목록창에 뜨게 하기
let titleDivs = titles.map((title) => {
    let titleDiv = document.createElement("div");
    titleDiv.textContent = title;
    return titleDiv;
});

function updateResults(text) {
    searchResults.innerHTML = ""
    if(text!=="") {
        titles.forEach((title, i) => {
            if(title.includes(text)) {
                searchResults.appendChild(titleDivs[i]);
            }
        });
        titleDivs.forEach((titleDiv, i) => {
            titleDiv.addEventListener("click", () => {
                searchTextBox.value = titles[i];
                searchResults.innerHTML = "";
            });
        })
        searchResults.style.display = "block";
    } else {
        searchResults.style.display = "none";
    }
}
searchTextBox.addEventListener("input", () => {
    let currentText = searchTextBox.value.toLowerCase();
    updateResults(currentText);   
});


//검색 누르면 해당 날짜로 이동
function search() { 
    titles.forEach((title, i) => {
        if(title == searchTextBox.value.toLowerCase()){
            updateSlide(i);
        }
    });
    searchTextBox.value = "";
}

//엔더 쳤을 때에도 search 함수 실행 
function searchOnEnter(event) {
    if (event.key === "Enter") {
        search();
    }
}