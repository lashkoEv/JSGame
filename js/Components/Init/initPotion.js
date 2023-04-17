export const initPotion = (player) => {
  setInterval(() => {
    if (player.score >= 1000) {
      potion.src = "../../../public/img/potion/potion-active.png";
    } else {
      potion.src = "../../../public/img/potion/potion-inactive.png";
    }
  }, 1);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      const isHealed = player.usePotion();

      if (isHealed) {
        const sound = new Audio();
        sound.src = "../../../public/sounds/potion-sounds/potion.mp3";
        sound.volume = 0.2;
        sound.play();
      }
    }
  });
};
