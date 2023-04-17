export const initPotion = (player) => {
  document.addEventListener("keydown", () => {potionListener(event, player)});
};

export const removePotionListener = () => {
  document.removeEventListener("keydown", potionListener);
};

const potionListener = (event, player) => {
  console.log(event);
  console.log(player);
  if (event.code === "Space") {
    const isHealed = player.usePotion();

    if (isHealed) {
      const sound = new Audio();
      sound.src = "../../../public/sounds/potion-sounds/potion.mp3";
      sound.volume = 0.2;
      sound.play();
    }
  }
};
