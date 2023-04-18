import { Monster } from "../Monster/Monster.js";
import { Reward } from "../Reward/Reward.js";

export class Slime extends Monster {
  static HP = 20;
  static DAMAGE = 1;
  static REWARD_VALUE = 100;
  static REWARD_IMG = "../../.././public/img/rewards/reward-simple.png";
  static IMAGE = "./public/img/monsters/monster-1.gif";

  constructor(inputDamage) {
    const reward = new Reward(Slime.REWARD_VALUE, Slime.REWARD_IMG);
    super(Slime.HP, Slime.DAMAGE, Slime.IMAGE, reward);
    this.monsterWrapper.style.width = "13%";

    this.image.addEventListener("click", () => {
      this.#takeDamage(inputDamage);
      this.checkHp();
    });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Slime.HP + "%";
  }

  takeSuperAttack(superDamage) {
    this.#takeDamage(superDamage);
  }
}
