// script.js (ご提示のファイルと同じ)
const main = document.getElementById("main");
const foot_banner = document.querySelector('.foot-banner');
const screen_height = window.innerHeight;

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollAdd(scrollY);
});

window.onload = function () {
    main.classList.add("active");
}

function scrollAdd(scrollY) {
    if( scrollY > window.innerHeight/100) {
        foot_banner.classList.add("active");
    } else if(scrollY < window.innerHeight/100) {
        foot_banner.classList.remove("active");
    }
}