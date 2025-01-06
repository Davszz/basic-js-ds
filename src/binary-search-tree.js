const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
    // remove line with error and write your code here
  }

  add(data) {
    this.node = addNewNode(this.node, data);

    function addNewNode(currentNode, data) {
      if (!currentNode) {
        return new Node(data);
      }
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode.left = addNewNode(currentNode.left, data);
      } else if (data > currentNode.data) {
        currentNode.right = addNewNode(currentNode.right, data);
      }
      return currentNode;
    }
    // remove line with error and write your code here
  }

  has(data) {
    if (this.find(data)) {
      return true;
    } else
      return false;
    // remove line with error and write your code here
  }

  find(data) {
    return findNode(this.node, data);

    function findNode(currentNode, data) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        return findNode(currentNode.left, data);
      } else if (data > currentNode.data) {
        return findNode(currentNode.right, data);
      }
    }
    // remove line with error and write your code here
  }

  remove(/* data */) {

    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
    // remove line with error and write your code here
  }

  max() {
    let currentNode = this.node;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};