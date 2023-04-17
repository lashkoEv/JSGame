import { initPotion } from "./Components/Init/initPotion.js";
import { initSound } from "./Components/Init/initSound.js";
import {
  initSwordAnimation,
  initSwordMovement,
  initSwordSound,
} from "./Components/Init/initSword.js";
import { Player } from "./Components/Player/Player.js";
import { Scene } from "./Components/Scene/Scene.js";

const app = () => {
  initSwordMovement();
  initSwordAnimation();
  initSwordSound();

  initSound();

  const player = new Player(100,1200);

  initPotion(player);
  
  const scene = new Scene(player);
};

app();

