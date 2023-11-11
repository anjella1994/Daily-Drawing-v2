let previousWidth = window.innerWidth;

window.addEventListener("resize", function() {
    const currentWidth = window.innerWidth;
    if(currentWidth !== previousWidth) {
        this.location.href="index.html";
    }
    previousWidth = currentWidth;
});