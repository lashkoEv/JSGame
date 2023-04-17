export class Reward {
  #value;
  #img;

  constructor(value, src) {
    this.#value = value;
    
    this.#img = document.createElement("img");
    this.#img.src = src;
    this.#img.classList.add("reward");
  }

  get img() {
    return this.#img;
  }

  get value() {
    return this.#value;
  }

  show() {
    this.#img.animate(
      [
        { transform: "translateY(-40px)" },
        { transform: "translateY(0px)" },
        { opacity: 1 },
        { opacity: 0 },
      ],
      2000
    );
    setTimeout(() => {
      this.#img.remove();
    }, 2000);
  }
}
