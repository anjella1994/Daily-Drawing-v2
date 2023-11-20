//---------------------- 메인 함수 실행 & 이벤트 핸들러 ----------------------//

//연, 월 초기값 가져오기
updateDate(y, m);

//스크롤 위치가 바뀌면 연, 월 업데이트 (단, 검색 중일 때는 실행 안 함)
window.addEventListener("scroll", () => !searchOn && updateDateByScroll());

//---------------------- 주요 함수 선언 ----------------------//

function updateDate(y, m) {
    yearBox.textContent = y;
    monthBox.textContent = m;
}

function updateDateByScroll() {
    let h = window.scrollY;
    if (!reverseOn) {
        //졍배열일 때, 스크롤 위치에 따라 연 월 표시 바뀌기
        for (let i = years.length - 1; i >= 0; i--) {
            if (h >= yearBoundary[i] - 1) {
                y = years[i];
                break;
            }
        }
        for (let i = months.length - 1; i >= 0; i--) {
            if (h >= monthBoundary[i] - 1) {
                m = months[i];
                break;
            }
        }
    } else {
        //역배열일 때, 스크롤 위치에 따라 연 월 표시 바뀌기 
        for (let i = 0; i < years.length; i++) {
            if(h >= yearBoundaryRev[i] - 1) {
                y = years[i];
                break;
            }
        }
        for (let i = 0; i < months.length; i++) {
            if (h >= monthBoundaryRev[i] - 1) {
                m = months[i];
                break;
            }
        }
    }
    updateDate(y, m);
}