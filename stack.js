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
    forwardStack.push(word[i]);
    backwardStack.push(word[word.length - (i + 1)]);
  }
  for (let i = 0; i < word.length; i++) {
    if (forwardStack.pop() !== backwardStack.pop()) {
      return false;
    }
  }
  return true;
}

function matchingParentheses(string) {
  // input is a string
  // output is an error if false, otherwise true
  let counter = 0;
  let lastPositive = 0;
  const pStack = new Stack();
  for (let i = 0; i < string.length; i++) {
    pStack.push(string[string.length - (i + 1)]);
  }

  for (let i = 0; i < string.length; i++) {
    const node = pStack.pop();
    if (node === '(') {
      lastPositive = i + 1;
      counter++;
    } else if (node === ')') {
      lastPositive--;
      counter--;
    }
    if (counter < 0) {
      return new Error(`The location of the error is ${i + 1}`);
    }
  }

  if (counter > 0) {
    return new Error(`The location of the error is ${lastPositive}`);
  }
  return true;

}

function sortStack(stack) {
  // 1 4 2 5
  // top 1 2 3 4 bottom
  // 
  //
  // first stack =   tempVariable = 4 second stack = 3 1 put the maximum in one
  // alternate = 0, looking for max, first stack to second stack
  // alternate = 1, looking for min, opposite

  // first stack = 4 tempVariable = 3
  let count = 6;
  let alternate = 0; // telling you whether you're looking for the min or max
  let tempNumber = 0;
  const firstStack = stack;
  const secondStack = new Stack();
  while (count > 0) {
    if (alternate === 0) { // looking for max
      if (firstStack.top.next === null) {
        firstStack.push(tempNumber);
        tempNumber = 0;
        alternate = 1;
        console.log('here');
      } else {
        tempNumber = firstStack.pop();
        if (firstStack.top.data > tempNumber) {
          secondStack.push(tempNumber);
          tempNumber = firstStack.pop();
        } else {
          secondStack.push(firstStack.pop());
        }
        console.log('first stack top max ' + firstStack.top);
        console.log(tempNumber);
        console.log('second Stack top max ' + secondStack.top);
        // looking for min
      }
    } else {
      if (secondStack.top.next === null) {
        secondStack.push(tempNumber);
        tempNumber = 0;
        alternate = 0;
      } else {// 3 4  1
        tempNumber = secondStack.pop();
        console.log(secondStack.top);
        if (secondStack.top.data < tempNumber) {
          secondStack.push(tempNumber);
          tempNumber = secondStack.pop();
        } else {
          firstStack.push(secondStack.pop());
        }
        alternate = 0;
        console.log('first stack min' + firstStack);
        console.log(tempNumber);
        console.log('second Stack min' + secondStack);
      }
    }
  }
  console.log(firstStack);
  console.log(secondStack);
  return firstStack;
}


function main() {
  // const starTrek = new Stack();

  // starTrek.push('Scotty');
  // starTrek.push('McCoy');
  // starTrek.push('Spock');
  // starTrek.push('Kirk');
  // starTrek.pop();
  // starTrek.pop();
  // starTrek.pop();
  // console.log(display(starTrek));
  // console.log(JSON.stringify(starTrek));
  const unsortedStack = new Stack();
  unsortedStack.push(2);
  unsortedStack.push(4);
  unsortedStack.push(1);
  // 1 2 4
  sortStack(unsortedStack);
}

main();