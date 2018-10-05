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

function display(stack, currentNode = stack.top) {
  if (currentNode.next === null) {
    return currentNode.data;
  } else {
    return currentNode.data + ' ' + display(stack, currentNode.next);
  }
}

function is_palindrome(word) {
  word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const forwardStack = new Stack();
  const backwardStack = new Stack();
  for (let i = 0; i < word.length; i++) {
    forwardStack.push(word[i]); // 0 1 2 3
    backwardStack.push(word[word.length - (i + 1)]);
  }
  for (let i = 0; i < word.length; i++) {
    if (forwardStack.pop() !== backwardStack.pop()) {
      return false;
    }
  }
  return true;
}


console.log(is_palindrome('A man, a plan, a canal: Panama'));

function main() {
  const starTrek = new Stack();

  starTrek.push('Scotty');
  starTrek.push('McCoy');
  starTrek.push('Spock');
  starTrek.push('Kirk');
  starTrek.pop();
  starTrek.pop();
  starTrek.pop();
  // console.log(display(starTrek));
  // console.log(JSON.stringify(starTrek));
}

main();