//클릭 시 nav 보였다 사라졌다
let nav = document.querySelector("#nav")
let navOn = false;

function toggleNav() {
    if (navOn) {
        nav.style.height = "0";
        navOn = false;
    } else {
        nav.style.height = "24vw";
        navOn = true;
    }
}

yearBox.addEventListener("click", () => toggleNav());
monthBox.addEventListener("click", () => toggleNav());

//nav의 연, 월 클릭 시 이동하는 명령 만들기 
let yearNavs = document.querySelectorAll("#yearNav>div");
let monthNavs = document.querySelectorAll("#monthNav>div");

let activeYear = currentFullDate.getFullYear();
let clickedYear = currentFullDate.getFullYear();
let activeMonths = [];

//클릭 시 유효한 월 구분, 유효 연월 빼고 연한 글씨 처리 
function setNav(activeYear) {
    for (let i = 0; i < yearNavs.length; i++) {
        yearNavs[i].style.color = i === (activeYear - 2020) ? "#555" : "#ddd";
    }
    switch (activeYear) {
        case 2020:
            activeMonths = [5,6,7,8,9,10,11];
            break;
        case 2021:
            activeMonths = [0,1,2,3,4,5,6,7,8,9,10,11];
            break;
        case 2022:
            activeMonths = [0,1,2,3];
            break;
    }
    for (let i = 0; i < monthNavs.length; i++) {
        monthNavs[i].style.color = activeMonths.includes(i) ? "#333" : "#ddd";
    }
}
//초기 nav 세팅. 클릭 시 active nav 바뀜 
setNav(Number(yearBox.textContent));
yearNavs.forEach((yearNav, i) => {
    yearNav.addEventListener("click", () => {
        clickedYear = i + 2020;
        setNav(i + 2020);
    });
}); 

//월 클릭 시 날짜 데이터 입력 후 그 날짜로 이동 
function moveByNav (y, m, d) {
    currentFullDate = new Date(y, m, d);
    currentFullDate.setHours(9,0,0,0);

    clickedDivNum = dateArray.findIndex(date => date.getTime() === currentFullDate.getTime());
    localStorage.setItem("clickedDivNum", clickedDivNum);
    updateCurrentDate(currentFullDate);
    inputTitle(clickedDivNum);
    inputImage(currentFullDate);
    toggleNav();
}
monthNavs.forEach((monthNav, i) => {
    monthNav.addEventListener("click", () => {
        if(activeMonths.includes(i)) {
            if(clickedYear === 2020 && i === 5) {
                moveByNav(clickedYear, i, 19);
            } else {
                moveByNav(clickedYear, i, 1);
            }
        }
    });
});


//일 클릭 시 이동
getDateInfo(currentFullDate);

filledBoxNums = [];
for (i = startBoxNum; i < startBoxNum + daysInMonth; i++) {
    filledBoxNums.push(i);
}

filledBoxNums.forEach((i) => {
    dateBoxes[i].addEventListener("click", () => {
        currentFullDate = new Date(y, m, i - startBoxNum + 1);
        currentFullDate.setHours(9,0,0,0);

        clickedDivNum = dateArray.findIndex(date => date.getTime() === currentFullDate.getTime());
        localStorage.setItem("clickedDivNum", clickedDivNum);
        updateCurrentDate(currentFullDate);
        inputTitle(clickedDivNum);
        inputImage(currentFullDate);
    })
})
