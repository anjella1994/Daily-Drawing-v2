let previousWidth = window.innerWidth;

window.addEventListener("resize", function() {
    const currentWidth = window.innerWidth;

    const isSearching = document.activeElement.tagName.toLowerCase() === 'input';

    if(currentWidth !== previousWidth && !isSearching) {
        this.location.href="index.html";
    }
    previousWidth = currentWidth;
});