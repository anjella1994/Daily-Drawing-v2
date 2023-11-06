let currentYear_2 = currentDate.getFullYear().toString().slice(-2);
let currentMonth_2 = (currentDate.getMonth() + 1).toString().padStart(2,'0');
let currentDay_2 = currentDate.getDate().toString().padStart(2,'0');

const imageSlide = document.querySelector("#imageSlide");

const image = document.createElement('img');
image.src = `images/DD-${currentYear_2 + currentMonth_2 + currentDay_2}.jpg`;
imageSlide.appendChild(image);