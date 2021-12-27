window.addEventListener('scroll', function () {
    let nav = document.querySelector('.nav-992px');
    let windowPosition = window.scrollY > 100;
    nav.classList.toggle('scrolling-active', windowPosition);
})