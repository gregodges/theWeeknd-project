const circle = document.querySelector('.circle');
const headerImg = document.querySelector('.header__img')

window.addEventListener('scroll', event =>{
    const scrollPos = window.scrollY;
    circle.style.width = scrollPos / 2+ 'px';
    circle.style.height =scrollPos /2 + 'px';
    circle.style.borderRadius = scrollPos / 2 + 'px'; 
})