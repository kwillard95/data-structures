var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var count = 1;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[count] = value;
    count++;
    return someInstance;
  };

  someInstance.pop = function() {
    var lastKey = Object.keys(storage).length;
    var value = someInstance.storage[lastKey];
    delete someInstance.storage[lastKey];
    count--;
    return value;
  };

  someInstance.size = function() {
    var keys = Object.keys(someInstance.storage);
    return keys.length;
  };

  return someInstance;
};

var newInstance = Stack();