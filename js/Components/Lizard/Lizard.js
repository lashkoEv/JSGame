import { Monster } from "../Monster/Monster.js";

export class Lizard extends Monster {
    static HP = 50;
    static DAMAGE = 2;
    static IMAGE = "./public/img/monsters/monster-3.gif";

  constructor() {
    super(Lizard.HP, Lizard.DAMAGE, Lizard.IMAGE);

    this.monsterWrapper.style.width = "17%";

    this.image.addEventListener("click", () => {
        this.#takeDamage(5);
        this.#checkHp();
      });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Lizard.HP + "%";
  }

  #checkHp() {
    if(this.hp <= 0) {
        this.monsterWrapper.style.visibility = "hidden";
    }
  }
}

