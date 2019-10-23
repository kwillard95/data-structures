var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add to back
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    //remove from front
    var item = storage[0];
    delete storage[0];
    for (var key in storage) {
      storage[(key-1)] = storage[key];
    }
    delete storage[Object.keys(storage).length-1];
    return item;
  };


  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};