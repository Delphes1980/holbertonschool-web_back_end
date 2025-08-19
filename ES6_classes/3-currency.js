export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Code getter
  get code() {
    return this._code;
  }

  // Code setter
  set code(value) {
    this._code = value;
  }

  // Name getter
  get name() {
    return this._name;
  }

  // Name setter
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
