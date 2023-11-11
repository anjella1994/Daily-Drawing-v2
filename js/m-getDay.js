let dayOfWeek = ["m", "t", "w", "t", "f", "s", "s"];
let dayBoxes = document.querySelectorAll("#calendar div:nth-child(4n+2)");

dayBoxes.forEach((dayBox, i) => {
    dayBox.textContent = dayOfWeek[(i + 4) % 7];
});