const dropDown = document.querySelector("#dropDown");

//드롭다운 html소스 입력
for (let i = 0 ; i < 23 ; i++) {
    const newDiv = document.createElement("div");
    const newYear = document.createElement("span");
    const newMonth = document.createElement("span");
    if (i == 0) {
        newYear.textContent = years[0];
    } else if (i == 7) {
        newYear.textContent = years[1];
    } else if (i == 19) {
        newYear.textContent = years[2];
    } 
    newMonth.textContent = months[i];
    
    newYear.classList.add("year");
    newMonth.classList.add("month");

    dropDown.appendChild(newDiv);
    newDiv.appendChild(newYear);
    newDiv.appendChild(newMonth);   
}

//드롭다운 클릭 시 나타나기 & 사라지기
const yearMonth = document.querySelector("#yearMonth");
let dropDownOn = false;
yearMonth.addEventListener("click", function() {
    if(dropDownOn) {
        dropDown.style.height = "0px";
        dropDownOn = false;
    } else {
        dropDown.style.height = "161vw";
        dropDownOn = true;
    }
});

//드롭다운 내 연, 월 클릭하면, 해당 날짜로 스크롤 이동
const dropDownDivs = document.querySelectorAll("#dropDown div")
for (let i = 0 ; i < 23 ; i++) {
    dropDownDivs[i].addEventListener("click", function() {
        const scrollTo = monthBoundary[i];
        window.scrollTo(0, scrollTo);
        dropDown.style.height = "0px";
        dropDownOn = false;
    })
}