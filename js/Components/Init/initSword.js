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
        { transform: "translateY( 40px) rotate(-90deg)" },
        { transform: "translateY(-80px) rotate(20deg)" },
        { transform: "translateY(0)" },
      ],
      300
    );
  };
};
