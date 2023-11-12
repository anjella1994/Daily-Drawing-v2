//674행짜리 그리드 행 역순으로 바꾸는 함수 선언
let reverseOn = false;
const firstBoxes = document.querySelectorAll("#calendar div.first");
const lastBoxes = document.querySelectorAll("#calendar div.last")
const body = document.querySelector("body")
let bodyHeight = body.style.height;

function reverseOrder() {
    if (!reverseOn) {
        calendarDivs.forEach((calendarDiv, i) => {
            let q = Math.floor(i / 4); //4로 나누었을 때 몫
            let r = i % 4; //4로 나누었을 때 나머지
            let newQ = 673 - q; //몫의 순서를 거꾸로 바꾸기 
            let newOrder = 4 * newQ + r; //몫 바뀌고 나머지는 그대로 
            calendarDiv.style.order = newOrder;

            firstBoxes.forEach((firstBox) => {firstBox.style.borderBottom = "2px solid #777";});
            lastBoxes.forEach((lastBox) => {lastBox.style.borderBottom = "1px solid #ccc";});
            
            updateDate(2022, "april");
            clickedYear = 2022; //clickedYear의 초기값 변경 
            setNav(2022); //메뉴 상태 초기값 변경 
            body.style.height = `${bodyHeight + 0.45*window.innerHeight}`;
            window.scrollTo(0,0);

            reverseOn = true;
        });
    } else {
        calendarDivs.forEach((calendarDiv, i) => {
            calendarDiv.style.order = i;

            firstBoxes.forEach((firstBox) => {firstBox.style.borderBottom = "1px solid #ccc";});
            lastBoxes.forEach((lastBox) => {lastBox.style.borderBottom = "2px solid #777";});

            updateDate(2020, "june");
            setNav(2020);
            window.scrollTo(0,0);

            reverseOn = false;
        });
    }
}

const reverseBttn = document.querySelector("#reverse");
document.addEventListener("DOMContentLoaded", () => {
    reverseBttn.addEventListener("click", reverseOrder);
})

//연 경계, 월 경계에 따른 스크롤 설정도 바꿔주기 

//Rev버전 월 경계 배열 생성 
let fullHeight = rowHeight * 674; //0빼고 전체 높이에서 해당 높이를 뺀 값을 새로운 배열로 생성
let monthBoundaryRev = monthBoundary.slice(1).map((height) => {
    return fullHeight - height;
});
monthBoundaryRev.push(0); //시간은 정순이라서 높이는 역순

//Rev버전 연 경계 배열 생성
let yearBoundaryRev = [];
yearBoundaryRev.push(monthBoundaryRev[6]); //밑에서 7번째 달부터 2020년
yearBoundaryRev.push(monthBoundaryRev[18]); //밑에서 19번째 달부터 2021년
yearBoundaryRev.push(monthBoundaryRev[22]); //밑에서 23번째 달부터 2022년

//updateDate.js에 있는 스크롤 함수에 반영