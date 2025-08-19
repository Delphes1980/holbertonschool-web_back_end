export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    // Check if it's an array and that every element is a string
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw TypeError('Students must be an array of string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Name getter
  get name() {
    return this._name;
  }

  // Name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Length getter
  get length() {
    return this._length;
  }

  // Length setter
  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Students getter
  get students() {
    return this._students;
  }

  // Students setter
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw TypeError('Students must be an array of string');
    }
    this._students = value;
  }
}
