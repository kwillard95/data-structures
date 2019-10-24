class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  dequeue() {
    var item = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[Object.keys(this.storage).length - 1];
    return item;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  size() {
    var length = Object.keys(this.storage).length;
    return length;
  }
}
