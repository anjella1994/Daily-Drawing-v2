let previousWidth = window.innerWidth;

window.addEventListener("resize", function() {
    const currentWidth = window.innerWidth;
    if(currentWidth !== previousWidth) {
        location.reload();
    }
    previousWidth = currentWidth;
});