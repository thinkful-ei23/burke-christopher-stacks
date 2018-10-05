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
    // top points to the one below it
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
function peek(stack) {
  return stack.top;
}

function display(stack, currentNode=stack.top) {
  if (currentNode.next === null) {
    return currentNode.data;
  } else {
    return currentNode.data + ' ' + display(stack, currentNode.next);
  }
}

function palindromeFinder(palindrome) {
  // abba
  // put the last letter into the stack
  // go backwards putting the letter into the stack
  // new stack = a b b a
  // 

}

function main() {
  const starTrek = new Stack();

  starTrek.push('Scotty');
  starTrek.push('McCoy');
  starTrek.push('Spock');
  starTrek.push('Kirk');
  starTrek.pop();
  starTrek.pop();
  starTrek.pop();
  console.log(display(starTrek));
  // console.log(JSON.stringify(starTrek));
}

main();