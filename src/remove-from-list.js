const { NotImplementedError } = require("../extensions/index.js");

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  if (!l) return l; // general case
  let nextValue = l.next;
  l.next = removeKFromList(l.next, k);

  if (l.value === k) {
    return l.next;
  } else {
    return l;
  }
}

module.exports = {
  removeKFromList,
};
