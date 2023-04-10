import { Monster } from "../Monster/Monster.js";

export class Slime extends Monster {
  static HP = 20;
  static DAMAGE = 1;
  static IMAGE = "./public/img/monsters/monster-1.gif";

  constructor() {
    super(Slime.HP, Slime.DAMAGE, Slime.IMAGE);

    this.monsterWrapper.style.width = "13%";

    this.image.addEventListener("click", () => {
      this.#takeDamage(5);
      this.#checkHp();
    });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Slime.HP + "%";
  }

  #checkHp() {
    if (this.hp <= 0) {
      this.monsterWrapper.style.visibility = "hidden";
    }
  }
}
