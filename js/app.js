import { initSound } from "./Components/Init/initSound.js";
import {
  initSwordAnimation,
  initSwordMovement,
  initSwordSound,
} from "./Components/Init/initSword.js";
import { Scene } from "./Components/Scene/Scene.js";

const app = () => {
  initSwordMovement();
  initSwordAnimation();
  initSwordSound();

  initSound();

  const scene = new Scene();
};

app();
