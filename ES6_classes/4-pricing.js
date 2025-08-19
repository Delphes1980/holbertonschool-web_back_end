import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Amount getter
  get amount() {
    return this._amount;
  }

  // Amount setter
  set amount(value) {
    this._value = value;
  }

  // Currency getter
  get currency() {
    return this._currency;
  }

  // Currency setter
  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `{${this.amount} ${Currency._name} (${Currency._code})}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
