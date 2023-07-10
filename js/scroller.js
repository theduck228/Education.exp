const scroller = document.querySelector('.btn_scroller')
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scroller.addEventListener("click", scrollToTop);