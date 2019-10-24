var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var count = 1;

  // Implement the methods below
  someInstance.push = function(value) {
    // push the items to the top of the stack
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    // pop the items from the top of the stack
    var item = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
