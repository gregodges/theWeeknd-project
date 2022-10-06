
import { w3cHtmlValidator } from 'w3c-html-validator';
const options = { filename: './index.html' };


/*-----SPOTIFY PAGE-----*/

/* --VIDEO CLIP-- */
const AlbumClick = document.querySelector("#albumPict");
const videoLaunch = document.querySelector(".fullClipVideo");
const hideClipDiv = document.querySelector('#ClipDiv');
const exitBackground = document.querySelector(".exitBackground");
const muteButton = document.querySelector("#muteButton");

/* show and play clip */
AlbumClick.addEventListener("click", function () {
    document.querySelector('#ClipDiv').className = "showClipDiv";
    videoLaunch.play();
});

/* if still play show mute button and hide video ELSE hide video */
exitBackground.addEventListener("click", function () {
    if (!videoLaunch.paused) {
        document.querySelector('#muteButton').className = "muteButtonShow";
        document.querySelector('#ClipDiv').className = "hideClipDiv";
    }
    else { document.querySelector('#ClipDiv').className = "hideClipDiv";
    document.querySelector('#muteButton').className = "muteButtonHide"; };
});

/* hide mute button*/
muteButton.addEventListener("click", function () {
    document.querySelector('#muteButton').className = "muteButtonHide";
    videoLaunch.pause();
});

/* video endend */
videoLaunch.addEventListener("ended", function () {
    document.querySelector('#ClipDiv').className = "hideClipDiv";
});

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

const vynil = document.getElementById("vynil"); 
const tShirt = document.getElementById("tShirt"); 
let numberOf = parseInt(document.getElementById("items").innerHTML);


function buyVynil() {
vynil.classList.add("animate"); 
setTimeout(() => vynil.classList.remove("animate"),2000);
document.getElementById("items").style.visibility = "visible";
numberOf++;
document.getElementById("items").innerHTML =numberOf;
}

function buyTshirt() {
tShirt.classList.add("animate"); 
setTimeout(() => tShirt.classList.remove("animate"),2000);
document.getElementById("items").style.visibility = "visible";
numberOf++;
document.getElementById("items").innerHTML =numberOf;
    }
                       

