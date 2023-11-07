window.addEventListener('beforeunload', function() {
    this.localStorage.setItem('scrollPosition', window.scrollY);
});