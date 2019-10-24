class Queue {
  constructor() {
    this.storage = {};
  }
  enqueue(value) {
    var newKey = (Object.keys(this.storage).length) + 1;
    this.storage[newKey] = value;
    return this;
  }

  dequeue() {
    var firstKey = Object.keys(this.storage)[0];
    var value = this.storage[firstKey];
    delete this.storage[firstKey];
    for (var key in this.storage) {
      var num = parseInt(key) - 1;
      var newKey = num.toString();
      this.storage[newKey] = this.storage[key];
      delete this.storage[key];
    }
    return value;
  }

  size() {
    var length = Object.keys(this.storage).length;
    return length;
  }
}
