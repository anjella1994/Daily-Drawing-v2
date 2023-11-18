//---------------------- 메인 이벤트 핸들러 ----------------------//

//마우스 오버(or 터치)에 따라 제목 생기거나 없어짐 
dateBoxes.forEach(((dateBox, i) => {
    //마우스 오버 
    dateBox.addEventListener("mouseenter", () => titleOn(dateBox, i));
    dateBox.addEventListener("mouseleave", titleOff);
    //터치 
    dateBox.addEventListener("touchstart", (event) => {event.preventDefault(); titleOn(dateBox, i);});
    dateBox.addEventListener("touchend", (event) => {event.preventDefault(); titleOff();});
    //클릭(슬라이드 페이지로 갔다가 돌아왔을 때 색이 여전히 칠해져 있는 것 방지)
    dateBox.addEventListener("click", () => titleOff(i));
}));

//---------------------- 주요 함수 선언 ----------------------//

//제목 나타나기
function titleOn(dateBox, i) {
    //그림 그린 날일 경우
    if(!dateBox.classList.contains("rest")){
        //마우스 오버한 이미지
        currentBox = dateBox;
        //제목 엘리먼트 생성 및 스타일 설정 
        currentTitle = document.createElement("div");
        currentTitle.textContent = `${titles[i]}`;
        currentTitle.classList.add("imageTitle");
        //제목 엘리먼트 위치 및 높이 설정 
        currentTitle.style.top = `${currentBox.offsetTop}px`
        currentTitle.style.left = `${currentBox.offsetLeft + currentBox.offsetWidth}px`
        currentTitle.style.height = `${currentBox.offsetHeight}px`
        //제목 엘리먼트 추가
        main.appendChild(currentTitle);
    }
}
//제목 사라지기
function titleOff() {
    main.removeChild(currentTitle);
}

