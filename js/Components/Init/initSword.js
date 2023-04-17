const swordMovement = (event) => {
  sword.style.left = event.pageX - 120 + "px";
};

const swordAnimation = () => {
  sword.animate(
    [
      { transform: "translate(0)" },
      { transform: "translateY( 90px) rotate(-90deg)" },
      { transform: "translateY(-180px) rotate(20deg)" },
      { transform: "translateY(0)" },
    ],
    300
  );
};

const swordSound = () => {
  const swordSound = new Audio();
  swordSound.src = "../../../public/sounds/sword-sounds/sword-1.mp3";
  swordSound.volume = 0.1;
  swordSound.play();
};

export const initSwordListeners = () => {
  document.addEventListener("mousemove", swordMovement);
  document.addEventListener("click", swordAnimation);
  document.addEventListener("click", swordSound);
};

export const removeSwordListeners = () => {
  document.removeEventListener("click", swordAnimation);
  document.removeEventListener("mousemove", swordMovement);
  document.removeEventListener("click", swordSound);
};
