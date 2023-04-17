import { Monster } from "../Monster/Monster.js";
import { Reward } from "../Reward/Reward.js";

export class Orc extends Monster {
  static HP = 100;
  static DAMAGE = 3;
  static SPEED = 1000;
  static REWARD_VALUE = 300;
  static REWARD_IMG = "../../../public/img/rewards/reward-grand.png";
  static IMAGE = "./public/img/monsters/monster-2.gif";

  constructor() {
    const reward = new Reward(Orc.REWARD_VALUE, Orc.REWARD_IMG);
    super(Orc.HP, Orc.DAMAGE, Orc.IMAGE, reward, Orc.SPEED);

    this.image.addEventListener("click", () => {
      this.#takeDamage(5);
      this.checkHp();
    });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Orc.HP + "%";
  }
}
