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
    else { document.querySelector('#ClipDiv').className = "hideClipDiv"; };
});

/* hide stop button*/
muteButton.addEventListener("click", function () {
    document.querySelector('#muteButton').className = "muteButtonHide";
    videoLaunch.pause();
});

/* video endend */
videoLaunch.addEventListener("ended", function () {
    document.querySelector('#ClipDiv').className = "hideClipDiv";
});

