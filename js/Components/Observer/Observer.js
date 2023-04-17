export class Observer {
  #callbacks;

  constructor() {
    this.#callbacks = [];
  }

  subscribe(callback) {
    this.#callbacks.push(callback);
  }

  broadcast() {
    this.#callbacks.forEach((callback) => callback());
  }

  clear() {
    this.#callbacks = [];
  }
}
