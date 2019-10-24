var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var newKey = (Object.keys(this.storage).length) + 1;
  this.storage[newKey] = value;
  return this;
};

Stack.prototype.pop = function() {
  var lastKey = Object.keys(this.storage).length;
  var value = this.storage[lastKey];
  delete this.storage[lastKey];
  return value;
};

Stack.prototype.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};
