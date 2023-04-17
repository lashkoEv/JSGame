const initSoundMainMenu = () => {
    const mainAudio = new Audio();
    mainAudio.src = "../public/sounds/main-theme/main-3.mp3";
    mainAudio.loop = true;
    mainAudio.volume = 0.2;
  
    soundMain.addEventListener("click", () => {
      if (mainAudio.paused) {
        soundImgMain.src = "../public/img/icons/sound-on.png";
        mainAudio.play();
      } else {
        mainAudio.pause();
        soundImgMain.src = "../public/img/icons/sound-off.png";
      }
    });
  };
  
  initSoundMainMenu();