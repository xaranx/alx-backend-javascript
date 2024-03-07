export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;

    // setting the properties as `this._*` does not trigger the corresponding setter function,
    // and thus we skip out on validating the coonstructor arguments before
    // setting them on the object. Prefer the syntax above, which actually
    // triggers the setter function and validates the inputs.
    //
    // this._name = name;
    // this._length = length;
    // this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(nm) {
    if (typeof nm !== 'string') throw new Error('TypeError: Name must be a string');
    this._name = nm;
  }

  set length(len) {
    if (typeof len !== 'number') throw new Error('TypeError: Length must be a number');
    this._length = len;
  }

  set students(st) {
    if (!Array.isArray(st)) throw new Error('TypeError: Students must be an array of strings');
    if (!st.every((s) => typeof s === 'string')) throw new Error('TypeError: Students must be an array of strings');
    this._students = st;
  }
}

