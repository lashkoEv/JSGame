import { Monster } from "../Monster/Monster.js";
import { Reward } from "../Reward/Reward.js";

export class Orc extends Monster {
  static HP = 100;
  static DAMAGE = 3;
  static REWARD_VALUE = 300;
  static REWARD_IMG = "../../../public/img/rewards/reward-grand.png";
  static IMAGE = "./public/img/monsters/monster-2.gif";

  constructor(inputDamage) {
    const reward = new Reward(Orc.REWARD_VALUE, Orc.REWARD_IMG);
    super(Orc.HP, Orc.DAMAGE, Orc.IMAGE, reward);

    this.image.addEventListener("click", () => {
      this.#takeDamage(inputDamage);
      this.checkHp();
    });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Orc.HP + "%";
  }

  takeSuperAttack(superDamage) {
    this.#takeDamage(superDamage);
  }
}
