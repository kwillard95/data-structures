var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length) {
      for (var i = 0; i < this.children.length; i++) {
        var isTrue = this.children[i].contains(target);
        if (isTrue) {
          return true;
        }
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild is constant time
// contains is linear because we have to potentially check every node in the tree