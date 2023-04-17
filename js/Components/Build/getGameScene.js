import { Game } from "../Game/Game.js";
import { initContextMenu } from "../Init/initContextMenu.js";
import { initPotion, removePotionListener } from "../Init/initPotion.js";
import { initSwordListeners, removeSwordListeners } from "../Init/initSword.js";
import { initSound } from "../Init/initSound.js";
import { Player } from "../Player/Player.js";
import { Storage } from "../Storage/Storage.js";
import { createElement } from "./createElement.js";
import { getMainMenu } from "./getMainMenu.js";

export const getGameScene = (isLoad) => {
  const storage = new Storage();
  let player;

  if (isLoad) {
    player = storage.load();
  } else {
    player = new Player();
  }

  const app = document.getElementById("app");

  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const scene = createElement("div", ["scene"]);
  app.append(scene);

  const playerInfo = createElement("div", ["player-info"]);
  scene.append(playerInfo);

  const spanHp = createElement("span", []);
  spanHp.textContent = "HP: ";
  playerInfo.append(spanHp);

  const hpWrapper = createElement("div", ["hp-wrapper", "player__hp-wrapper"]);
  playerInfo.append(hpWrapper);

  const playerHp = createElement("div", ["hp", "player__hp"]);
  playerHp.id = "playerHp";
  hpWrapper.append(playerHp);

  const playerScore = createElement("div", ["player__score"]);
  playerScore.textContent = "SCORE: ";
  playerInfo.append(playerScore);

  const score = createElement("span", []);
  score.id = "score";
  playerScore.append(score);

  const scoreImg = createElement("img", ["score__img"]);
  scoreImg.src = "../../../public/img/rewards/reward-simple.png";
  playerScore.append(scoreImg);

  const soundBtn = createElement("button", ["sound-button"]);
  scene.append(soundBtn);

  const soundImg = createElement("img", ["sound-img"]);
  soundImg.src = "../../../public/img/icons/sound-off-2.png";
  soundBtn.append(soundImg);

  const playingField = createElement("div", ["playing-field"]);
  playingField.id = "playingField";
  scene.append(playingField);

  const sword = createElement("img", ["sword"]);
  sword.id = "sword";
  sword.src = "../../../public/img/player/sword5.png";
  scene.append(sword);

  const potion = createElement("img", ["potion"]);
  potion.id = "potion";
  potion.src = "../../../public/img/potion/potion-inactive.png";
  scene.append(potion);

  const intervalId = checkPotion(player);

  const game = new Game(player);

  const contextMenu = createElement("div", ["modal"]);
  contextMenu.id = "menuModal";
  scene.append(contextMenu);

  const menuContent = createElement("div", ["modal__content"]);
  contextMenu.append(menuContent);

  const close = createElement("img", ["close"]);
  close.id = "close";
  close.src = "../../../public/img/icons/close.png";
  menuContent.append(close);

  const saveButton = createElement("button", ["button"]);
  saveButton.textContent = "SAVE";
  saveButton.addEventListener("click", () => {
    storage.save(player);
  });
  menuContent.append(saveButton);

  const saveAndBackButton = createElement("button", ["button"]);
  saveAndBackButton.textContent = "SAVE AND BACK TO MENU";
  saveAndBackButton.addEventListener("click", () => {
    game.clearObserver();
    storage.save(player);
    clearInterval(intervalId);
    removeSwordListeners();
    removePotionListener();
    getMainMenu();
  });
  menuContent.append(saveAndBackButton);

  const backButton = createElement("button", ["button"]);
  backButton.textContent = "BACK TO MENU";
  backButton.addEventListener("click", () => {
    game.clearObserver();
    clearInterval(intervalId);
    removeSwordListeners();
    removePotionListener();
    getMainMenu();
  });
  menuContent.append(backButton);

  initSound(soundBtn, soundImg);

  init(player);
};

const init = (player) => {
  player.init();

  initSwordListeners();
  initContextMenu();

  initPotion(player);
};

const checkPotion = (player) => {
  return setInterval(() => {
    if (player.score >= 1000) {
      potion.src = "../../../public/img/potion/potion-active.png";
    } else {
      potion.src = "../../../public/img/potion/potion-inactive.png";
    }
  }, 1);
};
