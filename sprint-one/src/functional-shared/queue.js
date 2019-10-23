

var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
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
      delete this.storage[key]
    }
    return value;
  },

  size: function() {

    var length = Object.keys(this.storage).length;
    return length;

  }
};

