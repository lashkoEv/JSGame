import { Lizard } from "../Lizard/Lizard.js";
import { Orc } from "../Orc/Orc.js";
import { Player } from "../Player/Player.js";
import { Slime } from "../Slime/Slime.js";

export class Scene {
  #player;
  #monsters;

  constructor(player = new Player()) {
    this.#player = player;
    this.#monsters = [];

    this.#setPlayerStats();
    this.#createMonsters();
    this.addMonstersToTheScene();
    this.testObserverSubscribe();
    this.testObserverBroadcast();
  }

  #setPlayerStats() {
    score.textContent = this.#player.score;

    playerHp.style.width = (100 * this.#player.hp) / Player.HP + "%";
  }

  #createMonsters() {
    const monstersCount = Math.floor(Math.random() * 7 + 1);

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

  testObserverSubscribe() {
    this.#monsters.forEach((monster) => {
      game.subscribe(
        function () {
          this.#player.hp = monster.damage;
        }.bind(this)
      );
    });
  }

  test() {
    this.#monsters = this.#monsters.filter((monster) => {
      if (monster.monsterWrapper.style.visibility !== "hidden") {
        return monster;
      }
    });
  }

  loadNewLevel() {
    this.clearScene();
    this.#createMonsters();
    this.addMonstersToTheScene();
    game.clear();
    this.testObserverSubscribe();
    this.testObserverBroadcast();
  }

  clearScene() {
    const deadMonsters = document.getElementsByClassName("monster-wrapper");

    while (deadMonsters.length !== 0) {
      playingField.removeChild(playingField.lastChild);
    }
  }

  testObserverBroadcast() {
    const interval = setInterval(() => {
      this.test();
      game.broadcast();

      if (this.#monsters.length <= 0) {
        this.loadNewLevel();
        clearInterval(interval);
      }
    }, 1000);
  }
}

class Game {
  #callbacks;

  constructor() {
    this.#callbacks = [];
  }

  subscribe(callback) {
    this.#callbacks.push(callback);
  }

  broadcast() {
    this.#callbacks.forEach((callback) => callback());
  }

  clear() {
    this.#callbacks = [];
  }
}

const game = new Game();
