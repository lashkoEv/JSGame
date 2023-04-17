import { initPotion } from "./Components/Init/initPotion.js";
import { initSound } from "./Components/Init/initSound.js";
import {
  initSwordAnimation,
  initSwordMovement,
  initSwordSound,
} from "./Components/Init/initSword.js";
import { Player } from "./Components/Player/Player.js";
import { Scene } from "./Components/Scene/Scene.js";
import { Storage } from "./Components/Storage/Storage.js";

const app = () => {
  const storage = new Storage();

  initSwordMovement();
  initSwordAnimation();
  initSwordSound();

  initSound();

  const player = storage.load();

  initPotion(player);
  
  const scene = new Scene(player);

  setTimeout(() => {
    storage.save(player);
    alert("save");
  }, 20000);
};

app();

