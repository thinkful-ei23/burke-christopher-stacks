'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// writing our own stack and node class 

class _Node2 {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack2 {
  constructor() {
    this.top = null;
  }

  push2(data) {
    if (this.top === null) {
      this.top = new _Node2(data, null);
      return this.top;
    }

    const node = new _Node2(data, this.top);
    this.top = node;
  }

}

