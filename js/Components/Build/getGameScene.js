import { Game } from "../Game/Game.js";
import { initContextMenu } from "../Init/initContextMenu.js";
import { initPotion, removePotionListener } from "../Init/initPotion.js";
import { initSwordListeners, removeSwordListeners } from "../Init/initSword.js";
import { initSound } from "../Init/initSound.js";
import { Player } from "../Player/Player.js";
import { Storage } from "../Storage/Storage.js";
import { createElement } from "./createElement.js";
import { getMainMenu } from "./getMainMenu.js";
import { clearWindow } from "./clearWindow.js";

export const getGameScene = (isLoad) => {
  const storage = new Storage();
  let player;

  if (isLoad) {
    player = storage.load();
  } else {
    player = new Player();
  }

  clearWindow();

  const scene = createElement("div", ["scene"]);
  scene.id = "scene";
  app.append(scene);

  initPlayerInfo(scene);
  initSoundBtn(scene);
  initPlayingElements(scene);

  const intervalId = checkPotion(player);
  const game = new Game(player);

  initContextMenuElement(scene, intervalId, game, storage, player);
  player.init();
  initListeners(player);

  initWinModal(scene, intervalId, game, storage, player);
  initLostModal(scene, intervalId, game);
};

const initContextMenuElement = (scene, intervalId, game, storage, player) => {
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
    storage.save(player);
    removePlayingScene(game, intervalId);
  });
  menuContent.append(saveAndBackButton);

  const backButton = createElement("button", ["button"]);
  backButton.textContent = "BACK TO MENU";
  backButton.addEventListener("click", () => {
    removePlayingScene(game, intervalId);
  });
  menuContent.append(backButton);
};

const removePlayingScene = (game, intervalId) => {
  game.clearObserver();
  clearInterval(intervalId);
  removeSwordListeners();
  removePotionListener();
  getMainMenu();
};

const initPlayingElements = (scene) => {
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
};

const initSoundBtn = (scene) => {
  const soundBtn = createElement("button", ["sound-button"]);
  scene.append(soundBtn);

  const soundImg = createElement("img", ["sound-img"]);
  soundImg.src = "../../../public/img/icons/sound-off-2.png";
  soundBtn.append(soundImg);

  initSound(soundBtn, soundImg);
};

const initPlayerInfo = (scene) => {
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
};

const initListeners = (player) => {
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

const initWinModal = (scene, intervalId, game, storage, player) => {
  const winModal = createElement("div", ["modal"]);
  winModal.id = "winModal";
  scene.append(winModal);

  const winContent = createElement("div", ["modal__content"]);
  winModal.append(winContent);

  const winTitle = createElement("div", ["title"]);
  winTitle.textContent = "YOU WIN!";
  winContent.append(winTitle);

  const nextLvl = createElement("button", ["button"]);
  nextLvl.textContent = "GO TO THE NEXT LEVEL!";
  nextLvl.addEventListener("click", () => {
    game.loadNewLevel();
    winModal.style.display = "none";
  });
  winContent.append(nextLvl);

  const saveAndBackToMenu = createElement("button", ["button"]);
  saveAndBackToMenu.textContent = "SAVE AND BACK TO MENU";
  saveAndBackToMenu.addEventListener("click", () => {
    storage.save(player);
    winModal.style.display = "none";
    removePlayingScene(game, intervalId);
  });
  winContent.append(saveAndBackToMenu);

  const backToMenu = createElement("button", ["button"]);
  backToMenu.textContent = "BACK TO MENU";
  backToMenu.addEventListener("click", () => {
    winModal.style.display = "none";
    removePlayingScene(game, intervalId);
  });
  winContent.append(backToMenu);
};

const initLostModal = (scene, intervalId, game) => {
  const lostModal = createElement("div", ["modal"]);
  lostModal.id = "lostModal";
  scene.append(lostModal);

  const lostContent = createElement("div", ["modal__content"]);
  lostModal.append(lostContent);

  const lostTitle = createElement("div", ["title"]);
  lostTitle.textContent = "YOU LOST!";
  lostContent.append(lostTitle);

  const backToMenu = createElement("button", ["button"]);
  backToMenu.textContent = "BACK TO MENU";
  backToMenu.addEventListener("click", () => {
    lostModal.style.display = "none";
    removePlayingScene(game, intervalId);
  });
  lostContent.append(backToMenu);
};
