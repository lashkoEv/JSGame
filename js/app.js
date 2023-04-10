document.addEventListener("mousemove", (event) => {
  sword.style.left = event.pageX - 120 + "px";
});

const mainAudio = new Audio();
mainAudio.src = "../public/sounds/main-theme/main-3.mp3";
mainAudio.loop = true;

sound.addEventListener("click", () => {
  if(mainAudio.paused) {
    soundImg.src = "./public/img/icons/sound-on.png";
  mainAudio.play();
  }else {
    mainAudio.pause();
    soundImg.src = "./public/img/icons/sound-off.png";
  }
  
});
