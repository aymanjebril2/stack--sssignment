class Stack {
  //constructor function
  constructor() {
    this.items = [];
  }

  //Stack Operations Go Here
  push(element) {
    //add item to the top of the stack
    this.items.push(element);
  }

  pop() {
    //remove item at the top of the stack
    return this.items.pop();
  }

  peek() {
    //return the item at top of the stack
    let lastItem = this.items.length - 1;
    return this.items[lastItem];
  }
  isEmpty() {
    //return boolean whether stack is empty
    return this.items.length === 0;
  }

  size() {
    //return total number of items in stack
    return this.items.length;
  }

  clear() {
    //remove all items from the stack
    this.items = [];
  }
}
var myStack = new Stack();
myStack.push("Data 1");
myStack.push("Data 2");
myStack.push("Data 3");
console.log(myStack);

function palindromTest(word) {
  //create a new Stack
  let plaindrom = new Stack(),
    wordReversed = "";
  //add each letter of the word onto a stack
  for (let i = 0; i < word.length; i++) {
    plaindrom.push(word[i]);
  }
  //now that we have everything on the stack, lets pop everytihng off
  //and save the popped item into a temp var
  while (plaindrom.size() > 0) {
    wordReversed += plaindrom.pop();
  }
  return wordReversed;
}
let testWord = "lol",
  isPalindrome = palindromTest(testWord);

isPalindrome === testWord
  ? console.log("Yes it's a Palindrome!!")
  : console.log("Sorry not a Palindrome :-(");

function baseConverter(decimalNumber, base) {
  let finalString = "",
    remainder,
    myStack = new Stack(),
    stackSize;

  while (decimalNumber >= 1) {
    remainder = Math.floor(decimalNumber % base);
    myStack.push(remainder);
    //set the number decimal number to be used in division
    decimalNumber /= base;
  }

  stackSize = myStack.size();
  for (let i = stackSize; i > 0; i--) {
    finalString += myStack.pop();
  }
  //return final string
  return finalString;
}

let results = baseConverter(64, 2);
console.log(results);

let isBalanced = (input) => {
  let brackets = "[]{}()<>";
  let stack = new Stack();
  console.log();

  for (let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0) {
      stack.items.push(bracketsIndex + 1);
    } else {
      if (stack.items.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.items.length === 0;
};

console.log(isBalanced("()"));
console.log(isBalanced("([[])"));
console.log(isBalanced("()[]{}<>"));

//First function to reverse the stack
let reverseStack = (stack) => {
  //If stack has value then call it revcursively
  if (!stack.isEmpty()) {
    let temp = stack.pop();
    reverseStack(stack);

    //Pass the element to second function to add it at top
    insertAtBottom(temp, stack);
  }
};

//Second function to add the items at the bottom
let insertAtBottom = (temp, stack) => {
  //If stack is empty then add the item
  if (stack.isEmpty()) {
    stack.push(temp);
  } else {
    //Else call the same function recursively
    let x = stack.pop();
    insertAtBottom(temp, stack);
    stack.push(x);
  }
};

let revNum = new Stack();
revNum.push(1);
revNum.push(2);
revNum.push(3);
revNum.push(4);
revNum.push(5);
while (!revNum.isEmpty()) {
  console.log(revNum.pop());
}

console.log(reverseStack(revNum));
