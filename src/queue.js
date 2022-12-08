class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    this.head
      ? (this.tail.next = this.tail = node)
      : (this.head = this.tail = node);

    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue,
};
