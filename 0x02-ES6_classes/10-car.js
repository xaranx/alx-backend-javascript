/* eslint-disable max-len */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    // console.log("this: ", this)
    return this; // the value of `this` is the class that called this static method.
  }

  cloneCar() {
    // console.log(Object.getOwnPropertySymbols(this.constructor));
    // console.log("this: ", this, this.constructor, this instanceof this.constructor)
    return new this.constructor[Symbol.species](); // `this.constructor` is the class that instantiated `this` object.
  }
}
