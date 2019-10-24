var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }

    list.tail = node;
  };

  list.removeHead = function() {
    var link = list.head.next;
    var deleted = list.head;
    list.head = link;
    return deleted.value;

  };

  list.contains = function(target) {
    var currentNode = list.head;

    var isTarget = function(node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next === null) {
          return false;
        } else {
          return isTarget(node.next);
        }
      }
    };

    return isTarget(currentNode);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// All functions are constant except for contains, which is linear.
