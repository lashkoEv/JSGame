export class Player {
  static HP = 500;

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
    this.#changeHpBar();
    this.#changeScore();
  }

  set hp(inputDamage) {
    this.#hp -= inputDamage;

    this.#changeHpBar();
  }

  usePotion() {
    if (this.#score >= 1000) {
      this.#hp = Player.HP;
      this.#changeHpBar();
      this.#score -= 1000;
      this.#changeScore();
      return true;
    }
    
    return false;
  }

  #changeHpBar() {
    playerHp.style.width = (100 * this.#hp) / Player.HP + "%";
  }

  #changeScore() {
    score.textContent = this.#score;
  }

  get hp() {
    return this.#hp;
  }

  set score(rewardValue) {
    this.#score += rewardValue;

    this.#changeScore();
  }

  get score() {
    return this.#score;
  }
}
