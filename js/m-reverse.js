//---------------------- 메인 이벤트 핸들러 ----------------------//

document.addEventListener("DOMContentLoaded", () => {
    reverseBttn.addEventListener("click", reverseOrder);
});

//---------------------- 주요 함수 선언 ----------------------//

function reverseOrder() {
    if (!reverseOn) {
        //정배열일 때 역배열로 변경
        calendarDivs.forEach((calendarDiv, i) => {
            //순서 바꾸기
            let q = Math.floor(i / 4); //4로 나누었을 때 몫
            let r = i % 4; //4로 나누었을 때 나머지
            let newQ = 673 - q; //몫의 순서를 거꾸로 바꾸기 
            let newOrder = 4 * newQ + r; //몫 바뀌고 나머지는 그대로 
            calendarDiv.style.order = newOrder;
            //월 구분선 수정
            firstBoxes.forEach((firstBox) => {firstBox.style.borderBottom = "2px solid #777";});
            lastBoxes.forEach((lastBox) => {lastBox.style.borderBottom = "1px solid #ccc";});
            //날짜, 메뉴의 초기값 수정 (검색 중일 때는 실행 안 함)
            if(!searchOn) {
                updateDate(2022, "april");
                currentNavYear = 2022; setNav(2022); 
                window.scrollTo(0,0);
            }
            reverseBttn.textContent = "∨ oldest first";
            reverseOn = true;
        });
    } else {
        //역배열일 때 정배열로 변경
        calendarDivs.forEach((calendarDiv, i) => {
            //순서 돌려놓기
            calendarDiv.style.order = i;
            //월 구분선 수정
            firstBoxes.forEach((firstBox) => {firstBox.style.borderBottom = "1px solid #ccc";});
            lastBoxes.forEach((lastBox) => {lastBox.style.borderBottom = "2px solid #777";});
            //날짜, 메뉴의 초기값 수정 (검색 중일 때는 실행 안 함)
            if(!searchOn) {
                updateDate(2020, "june");
                currentNavYear = 2020; setNav(2020);
                window.scrollTo(0,0);
            }
            reverseBttn.textContent = "∧ latest first";
            reverseOn = false;
        });
    }
}


