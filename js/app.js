import { Lizard } from "./Components/Lizard/Lizard.js";
import { Orc } from "./Components/Orc/Orc.js";
import { Slime } from "./Components/Slime/Slime.js";

document.addEventListener("mousemove", (event) => {
  sword.style.left = event.pageX - 120 + "px";
});

document.onclick = () => {
  sword.animate(
    [
      { transform: "translate(0)" },
      { transform: "translateY( 40px) rotate(-90deg)" },
      { transform: "translateY(-80px) rotate(20deg)" },
      { transform: "translateY(0)" },
    ],
    300
  );
};

const mainAudio = new Audio();
mainAudio.src = "../public/sounds/main-theme/main-3.mp3";
mainAudio.loop = true;
mainAudio.volume = 0.2;

sound.addEventListener("click", () => {
  if (mainAudio.paused) {
    soundImg.src = "./public/img/icons/sound-on.png";
    mainAudio.play();
  } else {
    mainAudio.pause();
    soundImg.src = "./public/img/icons/sound-off.png";
  }
});

function app() {
  const orc = new Orc();
  const lizard = new Lizard();
  const slime = new Slime();


  playingField.append(orc.monsterWrapper);
  playingField.append(lizard.monsterWrapper);
  playingField.append(slime.monsterWrapper);
}

app();
