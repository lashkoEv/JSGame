import { initContextMenu, initButtons } from "./Components/Init/initContextMenu.js";
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
  const player = storage.load();

  initSwordMovement();
  initSwordAnimation();
  initSwordSound();

  initSound();

  initContextMenu();
  initButtons(player,storage);


  initPotion(player);
  
  const scene = new Scene(player);
};

app();