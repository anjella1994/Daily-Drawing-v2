// 브라우저의 화면에서 주소창, 탭 등 상단바 높이를 제외한 영역의 높이를 content-height이라는 css변수로 선언  

let contentHeight = window.innerHeight;
document.documentElement.style.setProperty('--content-height', contentHeight + 'px');