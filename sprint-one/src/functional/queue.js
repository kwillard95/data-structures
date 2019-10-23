var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var count = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[count] = value;
    count++;
    return someInstance;
  };

  someInstance.dequeue = function() {
    var firstKey = Object.keys(storage)[0];
    var value = someInstance.storage[firstKey];
    delete someInstance.storage[firstKey];
    for (var key in someInstance.storage) {
      var num = parseInt(key) - 1;
      var newKey = num.toString();
      key = newKey;
    }
    return value;
  };

  someInstance.size = function() {
    var keys = Object.keys(someInstance.storage);
    return keys.length;
  };

  return someInstance;
};
