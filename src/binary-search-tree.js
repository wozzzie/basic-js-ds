const { NotImplementedError } = require("../extensions/index.js");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.parent = null;
  }

  root() {
    return this.parent;
  }

  add(data) {
    let value = new Node(data);
    const parent = this.parent;
    // const parentData = parent.data;
    // const valueData = value.data;

    if (!this.parent) {
      this.parent = value;
    } else {
      this.addValue(parent, value);
    }
  }

  addValue(data, value) {
    let dataLeft = data.left;
    let dataRight = data.right;

    const parent = this.parent;
    const parentData = parent.data;
    const valueData = value.data;

    if (valueData < parentData) {
      dataLeft === null ? (dataLeft = value) : this.addValue(dataLeft, value);
    } else {
      dataRight === null
        ? (dataRight = value)
        : this.addValue(dataRight, value);
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    // let parent = this.parent;
    // if (!parent) return null;

    // for (;;) {
    //   if (!parent) {
    //     return false;
    //   }

    //   if (data === parent.data) {
    //     return true;
    //   }

    //   if (data < parent.data) {
    //     parent = parent.left;
    //   } else {
    //     parent = parent.right;
    //   }
    // }
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let parent = this.parent;

    if (!parent) return null;
   
    while (parent.left) {
      parent = parent.left;
    }

    return parent.data;
  }

  max() {
    let parent = this.parent;

    if (!parent) return null;

    while (parent.right) {
      parent = parent.right;
    }

    return parent.data;
  }
}

module.exports = {
  BinarySearchTree,
};
