class Stack {
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