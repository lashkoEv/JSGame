export class Player {
  static HP = 1000;

  #hp;
  #score;
  #damage;

  constructor(hp = Player.HP, score = 0) {
    this.#hp = hp;
    this.#score = score;
    this.#damage = 5;
    this.#init();
  }

  get damage() {
    return this.#damage;
  }

  #init() {
    score.textContent = this.#score;
    playerHp.style.width = (100 * this.#hp) / Player.HP + "%";
  }

  set hp(inputDamage) {
    this.#hp -= inputDamage;

    playerHp.style.width = (100 * this.#hp) / Player.HP + "%";
  }

  get hp() {
    return this.#hp;
  }

  set score(rewardValue) {
    this.#score += rewardValue;

    score.textContent = this.#score;
  }

  get score() {
    return this.#score;
  }
}
