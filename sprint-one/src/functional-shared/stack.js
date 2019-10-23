var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    someInstance.storage = storage;
    this.storage[count] = value;
    count++;
    return someInstance;
  },
  pop: function() {
    var lastKey = Object.keys(storage).length;
    var value = this.storage[lastKey];
    delete this.storage[lastKey];
    count--;
    return value;
  },
  size: function() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }
};


