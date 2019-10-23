var Queue = function() {
  var someInstance = {};
  var storage = {};
  var count = 1;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[count] = value;
    count++;
    return this;
  },

  dequeue: function() {
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

var newInstance = Queue();
extend(newInstance, queueMethods);

