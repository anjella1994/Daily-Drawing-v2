const imageBox = document.querySelector("#image");
const image = document.createElement('img');

function inputImage(date) {
    let currentYear_2 = date.getFullYear().toString().slice(-2);
    let currentMonth_2 = (date.getMonth() + 1).toString().padStart(2,'0');
    let currentDay_2 = date.getDate().toString().padStart(2,'0');
    image.src = `images/DD-${currentYear_2 + currentMonth_2 + currentDay_2}.jpg`;
    imageBox.appendChild(image);
}

inputImage(currentFullDate);
