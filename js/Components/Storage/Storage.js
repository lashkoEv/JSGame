import { Player } from "../Player/Player.js";

export class Storage {
  save(player) {
    localStorage.setItem("hp", player.hp);
    localStorage.setItem("score", player.score);
  }

  load() {
    if (localStorage.getItem("hp") && localStorage.getItem("score")) {
      const hp = +localStorage.getItem("hp");
      const score = +localStorage.getItem("score");
      return new Player(hp, score);
    }

    return new Player();
  }
}
