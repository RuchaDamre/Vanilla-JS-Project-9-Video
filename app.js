let btns = document.querySelector(".btns");
let video = document.getElementById("video");
let loader = document.getElementById("loader");

btns.addEventListener('click', () => {
    if (!btns.classList.contains("slide")) {
        btns.classList.add("slide");
        video.pause();
    }
    else {
        btns.classList.remove("slide");
        video.play();
    }
});

window.addEventListener('load', () => {
    loader.style.display = "none";
});