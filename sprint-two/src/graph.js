

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.nodes.includes(node)) {
    this.nodes.push(node);
    this.edges.push([]);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  for (var i = 0; i < this.nodes.length; i++) {
    this.removeEdge(node, this.nodes[i]);
  } 
  this.edges.splice(index, 1);
  this.nodes.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  if (this.edges[fromIndex].includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  this.edges[fromIndex].push(toNode);
  this.edges[toIndex].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromOuterIndex = this.nodes.indexOf(fromNode);
  var toOuterIndex = this.nodes.indexOf(toNode);
  var toInnerIndex = this.edges[fromOuterIndex].indexOf(toNode);
  var fromInnerIndex = this.edges[toOuterIndex].indexOf(fromNode);
  this.edges[fromOuterIndex].splice(toInnerIndex, 1);
  this.edges[toOuterIndex].splice(fromInnerIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//addNode: linear
//contains: linear
//addEdge: linear
//removeEdge: linear
//forEachNode: linear
