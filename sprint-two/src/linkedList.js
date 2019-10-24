var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new node
    var node = Node(value);
    //assign inputted value to new node
    //if list is not empty:
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }

    list.tail = node;
    //assign previous node's 'next' to this node
    //if list is empty:
    //assign node to head
    //assign node to tail
  };

  list.removeHead = function() {
    //reassign next node as head
    //delete head
    //return removed head
    var link = list.head.next;
    var deleted = list.head;
    list.head = link;
    return deleted.value;

  };

  list.contains = function(target) {
    //searching for the value
    //set node to head
    debugger;
    var currentNode = list.head;

    //helper function(node):
    //if node has value,
    //return true
    //else
    //if node is tail
    //return false
    //else call helper on the next node
    var isTarget = function(node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next === null) {
          debugger;
          return false;
        } else {
          return isTarget(node.next);
        }
      }
    };

    //call helper function on node
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

var list = LinkedList();
list.addToTail(12);
list.addToTail(1);
list.addToTail(15);
list.removeHead();
console.log(list);
console.log(list.contains(1));