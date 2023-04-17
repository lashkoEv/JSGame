import { initSound } from "../Init/initSound.js";
import { createElement } from "./createElement.js";
import { getGameScene } from "./getGameScene.js";

export const getMainMenu = () => {
    const app = document.getElementById("app");
    while (app.firstChild) {
        app.removeChild(app.firstChild);
      }
    const scene = createElement("div", ["scene-menu"]);
    app.append(scene);
  
    const menu = createElement("div", ["menu"]);
    scene.append(menu);
  
    const title = createElement("div", ["title"]);
    title.textContent = "MONSTER CLICKER";
    menu.append(title);
  
    const newGame = createElement("button", ["button"]);
    newGame.textContent = "NEW GAME";
    newGame.addEventListener("click", () => {
      getGameScene(false);
    });
    menu.append(newGame);
  
    const loadGame = createElement("button", ["button"]);
    loadGame.textContent = "LOAD GAME";
    loadGame.addEventListener("click", () => {
      getGameScene(true);
    });
    menu.append(loadGame);
  
    const goToRes = createElement("a", ["button"]);
    goToRes.href = "https://github.com/lashkoEv/JSGame";
    goToRes.textContent = "GO TO RESOURCES";
    menu.append(goToRes);
  
    const soundBtn = createElement("button", ["sound-button-menu"]);
    scene.append(soundBtn);
  
    const soundImg = createElement("img", ["sound-img-menu"]);
    soundImg.src = "../public/img/icons/sound-off-2.png";
    soundBtn.append(soundImg);
  
    initSound(soundBtn, soundImg);
  };