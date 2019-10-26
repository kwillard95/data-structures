var BinarySearchTree = function(value) {
  var node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left;
  node.right;
  return node;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);
  if (this.value > value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    if (this.value > value && this.left) {
      return this.left.contains(value);
    } else if (this.right) {
      return this.right.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Insert and contains are O(log n)
// depthFirstLog is linear O(n)

var findNearest = function(array, target) {
  //create our tree
  var tree = BinarySearchTree(array[0]);
  array.forEach(function(item) {
    tree.insert(item);
  });
  //search our tree
  //var closest value
  var closestValue = Infinity;
  var prevDiff = Infinity;

  var checkNode = function(node) {
    var currDiff = Math.abs(target - node.value);
    if (currDiff < prevDiff) {
      closestValue = node.value;
    }
    if (target > node.value && node.right) {
      checkNode(node.right);
    } else if (target < node.value && node.left) {
      checkNode(node.left);
    }
  };
  checkNode(tree);
  return closestValue;
};

var testArray = [8, 10, 3, 1, 6, 14, 7, 4, 13];
console.log(findNearest(testArray, 12));

//We would have to traverse through the entire array of potentially a million numbers in order to know the closest number. With the binary tree we only have to traverse through the levels of one path. If we were to traverse through an array the time complexity would be linear, whereas the time complexity of traversing through a binary tree is O(log n)