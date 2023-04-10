export class Monster {
  #hp;
  #damage;

  #monsterWrapper;
  #hpDiv;
  #image;

  constructor(hp, damage, image) {
    this.#hp = hp;
    this.#damage = damage;

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
}
