export class Monster {
  #hp;
  #damage;
  #reward;

  #monsterWrapper;
  #hpDiv;
  #image;
  #isDead;
  #interval;
  #speed;

  constructor(hp, damage, image, reward, speed) {
    this.#hp = hp;
    this.#damage = damage;
    this.#reward = reward;
    this.#isDead = false;
    this.#speed = speed;

    this.#monsterWrapper = document.createElement("div");
    this.#monsterWrapper.classList.add("monster-wrapper");

    const hpWrapper = document.createElement("div");
    hpWrapper.classList.add("hp-wrapper");
    this.#monsterWrapper.append(hpWrapper);

    this.#hpDiv = document.createElement("div");
    this.#hpDiv.classList.add("hp");
    hpWrapper.append(this.#hpDiv);

    this.#image = document.createElement("img");
    this.#image.classList.add("monster");
    this.#image.src = image;
    this.#monsterWrapper.append(this.#image);

    // this.#interval = this.#animate();
  }

  #animate() {
    return setInterval(() => {
      this.#monsterWrapper.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-40px)" },
          { transform: "translateY(0)" },
          { transform: "translateY(40px)" },
          { transform: "translateY(0)" },
        ],
        this.#speed
      );
    }, this.#speed);
  }

  get hp() {
    return this.#hp;
  }

  set hp(inputDamage) {
    this.#hp -= inputDamage;
  }

  get damage() {
    return this.#damage;
  }

  get monsterWrapper() {
    return this.#monsterWrapper;
  }

  get hpDiv() {
    return this.#hpDiv;
  }

  get image() {
    return this.#image;
  }

  get reward() {
    return this.#reward.value;
  }

  die() {
    this.#isDead = true;
    clearInterval(this.#interval);
  }

  get isDead() {
    return this.#isDead;
  }

  checkHp() {
    if (this.#hp <= 0) {
      this.#image.remove();
      this.#hpDiv.parentElement.style.visibility = "hidden";

      this.monsterWrapper.append(this.#reward.img);
      this.#reward.show();
    }
  }
}
