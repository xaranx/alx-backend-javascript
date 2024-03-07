export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sq) {
    if (typeof sq !== 'number') throw new Error('TypeError: Sqft must be a number');
    this._sqft = sq;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
