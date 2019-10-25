var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //pass the value to the child by creating a new instance of tree and assign value to that
  var newTree = Tree(value);
  this.children.push(newTree);
  //go into this node and add new node to its children
};

treeMethods.contains = function(target) {
  //var isTrue = truthiness || false;
  //if current node has the value
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
var tree = Tree(3);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(7));//.to.equal(true);
console.log(tree.contains(8));//.to.equal(true);



/*
 * Complexity: What is the time complexity of the above functions?
 */
