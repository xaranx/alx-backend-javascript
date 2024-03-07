import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(am) {
    if (typeof am !== 'number') throw new Error('TypeError: Amount must be a number');
    this._amount = am;
  }

  set currency(curr) {
    if (!(curr instanceof Currency)) throw new Error('TypeError: Currency must be a currency');
    this._currency = curr;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new Error('TypeError: Amount must be a number');
    if (typeof conversionRate !== 'number') throw new Error('TypeError: ConversionRate must be a number');

    return amount * conversionRate;
  }
}
