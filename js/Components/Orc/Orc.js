import { Monster } from "../Monster/Monster.js";

export class Orc extends Monster {
  static HP = 100;
  static DAMAGE = 3;
  static IMAGE = "./public/img/monsters/monster-2.gif";

  constructor() {
    super(Orc.HP, Orc.DAMAGE, Orc.IMAGE);

    this.image.addEventListener("click", () => {
        this.#takeDamage(5);
        this.#checkHp();
      });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Orc.HP + "%";

    this.#checkHp();
  }

  #checkHp() {
    if(this.hp <= 0) {
        this.monsterWrapper.style.visibility = "hidden";
    }
  }
}
