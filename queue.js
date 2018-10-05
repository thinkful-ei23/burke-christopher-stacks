'use strict';
class _Node {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}

// 1 2 3

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    //create a node with the data that you want to add to the queue
    const node = new _Node(data);

    //if the queue is empty, 
    //make the node the first node on the queue
    if (this.first === null) {
      this.first = node;
    }
    //if there is something on the queue already
    //then take the node that is currently at the end of the queue
    //and link it to the new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
}