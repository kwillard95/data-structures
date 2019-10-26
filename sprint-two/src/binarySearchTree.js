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
  } else {
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
  //executes callback on each node in tree
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var binarySearchTree = BinarySearchTree(5);
 binarySearchTree.insert(2);
 binarySearchTree.insert(3);
 binarySearchTree.insert(7);
 binarySearchTree.insert(6);
 console.log(binarySearchTree.left.right.value);//.to.equal(3);
 console.log(binarySearchTree.contains(10));//.to.equal(true);