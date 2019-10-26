

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  var tuple = [k, v];
  var exists = false;
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      exists = true;
    }
  }
  if (!exists) {
    this._storage.get(index).push(tuple);
  }
  this.checkUsage();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i);
    }
  }
  this.checkUsage();
};

HashTable.prototype.checkUsage = function() {
  var tupleCount = 0;
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      tupleCount += bucket.length;
    }
  });
  var ratio = tupleCount / this._limit;
  if (ratio > 0.75) {
    this._limit *= 2;
    this.reHash();
  }
  if (ratio < 0.25) {
    this._limit /= 2;
    this.reHash();
  }
};

HashTable.prototype.reHash = function() {
  var tupleArray = [];
  var thisTable = this;
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        tupleArray.push(bucket[i]);
      }
    }
  });
  this._storage = LimitedArray(this._limit);
  tupleArray.forEach(function(item) {
    var k = item[0];
    var v = item[1];
    var index = getIndexBelowMaxForKey(k, thisTable._limit);
    if (!thisTable._storage.get(index)) {
      thisTable._storage.set(index, []);
    }
    var tuple = [k, v];
    var exists = false;
    var bucket = thisTable._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        exists = true;
      }
    }
    if (!exists) {
      thisTable._storage.get(index).push(tuple);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//All functions are constant, assuming the hash table resizes itself at the appropriate time. Our hash table does not resize itself, so all functions will have more linear complexity.