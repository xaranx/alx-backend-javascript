export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(cd) {
    if (typeof cd !== 'string') throw new Error('TypeError: Code must be a string');
    this._code = cd;
  }

  set name(nm) {
    if (typeof nm !== 'string') throw new Error('TypeError: Name must be a string');
    this._name = nm;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
