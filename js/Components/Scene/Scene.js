import { Observer } from "../Observer/Observer.js";
import { Lizard } from "../Lizard/Lizard.js";
import { Orc } from "../Orc/Orc.js";
import { Player } from "../Player/Player.js";
import { Slime } from "../Slime/Slime.js";
export class Scene {
  #player;
  #monsters;
  #observer;

  constructor(player = new Player()) {
    this.#player = player;
    this.#monsters = [];
    this.#observer = new Observer();

    this.loadNewLevel();
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

  addMonstersToTheScene() {
    this.#monsters.forEach((monster) => {
      playingField.append(monster.monsterWrapper);
    });
  }

  clearScene() {
    const deadMonsters = document.getElementsByClassName("monster-wrapper");

    while (deadMonsters.length !== 0) {
      playingField.removeChild(playingField.lastChild);
    }
  }

  loadGame() {
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
        }.bind(this)
      );
    });
  }

  checkDeadMonsters() {
    this.#monsters = this.#monsters.filter((monster) => {
      if (!monster.isDead) {
        return monster;
      }
    });
  }

  loadNewLevel() {
    setTimeout(() => {
      this.clearScene();
      this.#createMonsters();
      this.addMonstersToTheScene();
      this.#observer.clear();
      this.loadGame();
      this.#observer.broadcast();
      this.checkLevel();
    }, 5000);
  }

  checkLevel() {
    const interval = setInterval(() => {
      this.checkDeadMonsters();

      if (this.#monsters.length <= 0) {
        this.loadNewLevel();
        clearInterval(interval);
      }
    }, 1000);
  }
}
