const imageBoxes = document.querySelectorAll("#calendar div:not(.empty):nth-child(4n+3)");

imageBoxes.forEach((imageBox, i) => {
    imageBox.style.backgroundImage = `url("thumbnails/thumbnails/no.${i}.jpg")`;
    imageBox.style.backgroundSize = 'cover';
    imageBox.style.backgroundPosition = 'center';
});
