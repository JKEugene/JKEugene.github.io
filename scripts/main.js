const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('DOMContentLoaded', function() {
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        burger.classList.toggle('active');
    });
});

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            burger.classList.remove('active');
        }
        header.style.top = `-${header.offsetHeight}px`;
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
