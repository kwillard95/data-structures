var Stack = function() {
  var someInstance = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    if(!("storage" in this)) {
      this.storage = {};
    }
    var newKey = (Object.keys(this.storage).length) + 1;
    this.storage[newKey] = value;
    return this;
  },
  pop: function() {
    var lastKey = Object.keys(this.storage).length;
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


