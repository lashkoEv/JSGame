export class Player {
  #hp;
  #score;
  #damage;

  constructor(hp = 500, score = 0) {
    this.#hp = hp;
    this.#score = score;
    damage = 5;
  }

  get damage() {
    return this.#damage;
  }

  set hp(inputDamage) {
    this.#hp -= inputDamage;
  }

  get hp() {
    return this.#hp;
  }

  set score(rewardValue) {
    this.#score += rewardValue;
  }

  get score() {
    return this.#score;
  }
}
