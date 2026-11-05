const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    const list = { next: null };
    let tail = list;
    let current = this.head;

    while (current) {
      tail.next = { value: current.value, next: null };
      tail = tail.next;
      current = current.next;
    }

    return list.next;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue,
};
