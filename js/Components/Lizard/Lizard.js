import { Monster } from "../Monster/Monster.js";
import { Reward } from "../Reward/Reward.js";

export class Lizard extends Monster {
  static HP = 50;
  static DAMAGE = 2;
  static REWARD_VALUE = 200;
  static REWARD_IMG = "../../../public/img/rewards/reward-middle.png";
  static IMAGE = "./public/img/monsters/monster-3.gif";

  constructor(inputDamage) {
    const reward = new Reward(Lizard.REWARD_VALUE, Lizard.REWARD_IMG);
    super(Lizard.HP, Lizard.DAMAGE, Lizard.IMAGE, reward);

    this.monsterWrapper.style.width = "17%";

    this.image.addEventListener("click", () => {
      this.#takeDamage(inputDamage);
      this.checkHp();
    });
  }

  #takeDamage(inputDamage) {
    this.hp = inputDamage;

    this.hpDiv.style.width = (100 * this.hp) / Lizard.HP + "%";
  }

  takeSuperAttack(superDamage) {
    this.#takeDamage(superDamage);
  }
}
