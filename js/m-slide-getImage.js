const imageBox = document.querySelector("#image");

function inputImage(date) {
    let currentYear_2 = date.getFullYear().toString().slice(-2);
    let currentMonth_2 = (date.getMonth() + 1).toString().padStart(2,'0');
    let currentDay_2 = date.getDate().toString().padStart(2,'0');
    if (titles[rowNum] !== "") { //그림 그린 날에만 명령 실행 - getDate, getTitle에서 선언한 rowNum, titles 활용 
        const currentImage = document.createElement('img');
        currentImage.src = `images/DD-${currentYear_2 + currentMonth_2 + currentDay_2}.jpg`;
        imageBox.appendChild(currentImage);
    }
}

inputImage(currentFullDate);

