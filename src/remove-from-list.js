const { NotImplementedError } = require("../extensions/index.js");

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  while (l && l.value === k) {
    l = l.next;
  }
  if (!l) return l;

  let linkedList = l;
}

module.exports = {
  removeKFromList,
};
