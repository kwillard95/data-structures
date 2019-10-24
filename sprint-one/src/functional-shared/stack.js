var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    var newKey = (Object.keys(this.storage).length) + 1;
    this.storage[newKey] = value;
    return this;
  },
  pop: function() {
    var lastKey = Object.keys(this.storage).length;
    var value = this.storage[lastKey];
    delete this.storage[lastKey];
    return value;
  },
  size: function() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }
};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function() {
  var item = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return item;
};

stackMethods.size = function() {
  return length = Object.keys(this.storage).length;
};


