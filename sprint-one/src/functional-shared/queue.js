

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    var newKey = (Object.keys(this.storage).length) + 1;
    this.storage[newKey] = value;
    return this;
  },

  dequeue: function() {
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
};
queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

queueMethods.dequeue = function() {
  var item = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return item;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
