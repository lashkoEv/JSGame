import { initSound } from "./Components/Init/initSound.js";
import {
  initSwordAnimation,
  initSwordMovement,
} from "./Components/Init/initSword.js";
import { Lizard } from "./Components/Lizard/Lizard.js";
import { Orc } from "./Components/Orc/Orc.js";
import { Slime } from "./Components/Slime/Slime.js";

const app = () => {
  initSwordMovement();
  initSwordAnimation();

  initSound();

  const orc = new Orc();
  const lizard = new Lizard();
  const slime = new Slime();

  playingField.append(orc.monsterWrapper);
  playingField.append(lizard.monsterWrapper);
  playingField.append(slime.monsterWrapper);
};

app();
