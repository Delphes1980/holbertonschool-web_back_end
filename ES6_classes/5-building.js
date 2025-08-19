export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }

    // This block ensures that classes extending Building (subclasses)
    // must provide their own implementation of the evacuationWarningMessage method.
    // It checks if the current instance's constructor is not the Building class itself.
    // If it's a subclass, it checks if the evacuationWarningMessage method
    // has been defined and is a function
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  // Sqft getter
  get sqft() {
    return this._sqft;
  }
}
