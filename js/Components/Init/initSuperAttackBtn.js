export const initSuperAttackListener = (game, player) => {
    document.addEventListener("keydown", () => {
      superAttackListener(event, game, player);
    });
  };
  
  export const removeSuperAttackListener = () => {
    document.removeEventListener("keydown", superAttackListener);
  };
  
  const superAttackListener = (event, game, player) => {
    if (event.code === "Enter") {
      const isReady = player.superAttack();
  
      if (isReady) {
        game.dealASuperAttack();

        const sound = new Audio();
        sound.src = "../../../public/sounds/sword-sounds/sword-2.mp3";
        sound.volume = 0.2;
        sound.play();
      }
    }
  };
  