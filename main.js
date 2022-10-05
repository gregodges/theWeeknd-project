const circle = document.querySelector('.circle');
const headerImg = document.querySelector('.header__img');
const submitBtn = document.querySelector('.btn_form');
const newLetterContainer = document.querySelector('.newsletter');
const form = document.querySelector('form');
const formEmail = document.querySelector('.form__email');
const checkBox = document.querySelector('.checkbox');
const formLabel = document.querySelector('.form__label')
const coloredD = document.querySelector('.btn_form-d');
const subscribeIcon = document.querySelector('.subscribed-icon');



window.addEventListener('scroll', event =>{
    const scrollPos = window.scrollY;
    circle.style.width = scrollPos / 2+ 'px';
    circle.style.height =scrollPos /2 + 'px';
    circle.style.borderRadius = scrollPos / 2 + 'px'; 

})

submitBtn.addEventListener("click", event =>{

newLetterContainer.classList.add('newsletter--clicked');
formEmail.style.width='0';
checkBox.style.opacity = '0';
formLabel.style.opacity= '0';
coloredD.style.opacity ='1';
coloredD.style.transform= 'translateY(0)'
subscribeIcon.style.opacity='1';
subscribeIcon.style.top = '45%';
subscribeIcon.style.transform = 'rotate(0)';
//form.style.justifyContent ='center';

submitBtn.addEventListener('mouseover', e=>{
    submitBtn.style.color ='white';
    submitBtn.style.cursor ='default';
})








})