const imageBox = document.querySelector("#imageBox");
function inputImage(date) {
    let yy = date.getFullYear().toString().slice(-2);
    let mm = (date.getMonth() + 1).toString().padStart(2,'0');
    let dd = date.getDate().toString().padStart(2,'0');

    if (titles[rowNum] !== "") { //그림 그린 날에만 명령 실행 - getDate, getTitle에서 선언한 rowNum, titles 활용 
        imageBox.innerHTML = `<img src="images/DD-${yy + mm + dd}.jpg">`;
    }
}
inputImage(currentFullDate);

