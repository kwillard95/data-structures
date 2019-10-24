class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    var newKey = (Object.keys(this.storage).length) + 1;
    this.storage[newKey] = value;
    return this;
  }

  pop() {
    var lastKey = Object.keys(this.storage).length;
    var value = this.storage[lastKey];
    delete this.storage[lastKey];
    return value;
  }

  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }

}