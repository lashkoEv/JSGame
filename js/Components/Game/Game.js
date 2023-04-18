import { Observer } from "../Observer/Observer.js";
import { Lizard } from "../Lizard/Lizard.js";
import { Orc } from "../Orc/Orc.js";
import { Player } from "../Player/Player.js";
import { Slime } from "../Slime/Slime.js";

export class Game {
  #player;
  #monsters;
  #observer;
  #intervals;

  constructor(player = new Player()) {
    this.#player = player;
    this.#monsters = [];
    this.#observer = new Observer();
    this.#intervals = [];

    this.loadNewLevel();
    this.#checkHp();
  }

  #createMonsters() {
    const monstersCount = Math.floor(Math.random() * 6 + 1);

    for (let i = 0; i < monstersCount; i++) {
      const monsterType = Math.floor(Math.random() * 3 + 1);

      switch (monsterType) {
        case 1:
          this.#monsters.push(new Slime());
          break;
        case 2:
          this.#monsters.push(new Lizard());
          break;
        case 3:
          this.#monsters.push(new Orc());
          break;
      }
    }
  }

  #addMonstersToTheScene() {
    this.#monsters.forEach((monster) => {
      playingField.append(monster.monsterWrapper);
    });
  }

  #clearScene() {
    const deadMonsters = document.getElementsByClassName("monster-wrapper");

    while (deadMonsters.length !== 0) {
      playingField.removeChild(playingField.lastChild);
    }
  }

  #loadGame() {
    this.#monsters.forEach((monster) => {
      this.#observer.subscribe(
        function () {
          const interval = setInterval(() => {
            this.#player.hp = monster.damage;

            if (monster.hp <= 0) {
              this.#player.score = monster.reward;
              monster.die();
              clearInterval(interval);
            }
          }, 2000);
          this.#intervals.push(interval);
        }.bind(this)
      );
    });
  }

  #checkDeadMonsters() {
    this.#monsters = this.#monsters.filter((monster) => {
      if (!monster.isDead) {
        return monster;
      }
    });
  }

  loadNewLevel() {
    this.#clearScene();
    this.#createMonsters();
    this.#addMonstersToTheScene();
    this.#observer.clear();
    this.#loadGame();
    this.#observer.broadcast();
    this.#checkLevel();
  }

  #checkLevel() {
    const interval = setInterval(() => {
      this.#checkDeadMonsters();

      if (this.#monsters.length <= 0) {
        this.#win();
        clearInterval(interval);
      }
    }, 1);
  }

  #checkHp() {
    const interval = setInterval(() => {
      if (this.#player.hp <= 0) {
        this.#lost();
        clearInterval(interval);
      }
    }, 1);
  }

  clearObserver() {
    this.#intervals.forEach((interval) => {
      clearInterval(interval);
    });

    this.#observer.clear();
  }

  #win() {
    winModal.style.display = "block";
    const audio = new Audio();
    audio.src = "../../../public/sounds/lvl-sounds/win.mp3";
    audio.volume = 0.3;
    audio.play();
  }

  #lost() {
    lostModal.style.display = "block";
    const audio = new Audio();
    audio.src = "../../../public/sounds/lvl-sounds/lost-2.mp3";
    audio.volume = 0.3;
    audio.play();
  }
}
