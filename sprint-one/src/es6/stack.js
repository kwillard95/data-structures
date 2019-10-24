class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }



  push(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop() {
    var item = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return item;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}