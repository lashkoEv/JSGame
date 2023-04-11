export const initSwordMovement = () => {
  document.addEventListener("mousemove", (event) => {
    sword.style.left = event.pageX - 120 + "px";
  });
};

export const initSwordAnimation = () => {
  document.onclick = () => {
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
};

export const initSwordSound = () => {
  document.addEventListener("click", () => {
    const swordSound = new Audio();
    swordSound.src = "../public/sounds/sword-sounds/sword-1.mp3";
    swordSound.volume = 0.1;
    swordSound.play();
  });
};
