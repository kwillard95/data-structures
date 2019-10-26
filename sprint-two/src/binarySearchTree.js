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

//Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

var findNearest = function(array, target) {
  var tree = BinarySearchTree(array[0]);
  array.forEach(function(item) {
    tree.insert(item);
  });

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

//If we did not use a binary search tree for this use case, we would have to traverse through the entire array of one million numbers in order to know the closest number. With the binary tree we only have to traverse through the levels of one path. If we were to traverse through an array the time complexity would be linear, whereas the time complexity of traversing through a binary tree is O(log n)