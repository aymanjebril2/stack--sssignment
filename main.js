//  Stack implementation
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    //  return the top most element in the stack, and remove it
    //  return error if stack is empty
    if (this.items.length === 0) return "Underflow error";
    return this.items.pop();
  }
  peek() {
    //  return the top most element (last item inserted)
    //  but WILL NOT delete it
    return this.items[this.items.length - 1];
  } //  isEmpty function
  isEmpty() {
    //  return true if stack is empty
    return this.items.length === 0;
  }

  //  printStack function
  //  Can also be done with while loop and .pop()
  //  Will still be O(n) runtime
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
//  Create object of the stack class
let myStack = new Stack();
//  Adding elements into my stack
myStack.push(10);
myStack.push(20);
myStack.push(30);
//  Print the stack elements
console.log(myStack.printStack());
//  Check element at the top
console.log(myStack.peek());
myStack.pop();
myStack.pop();
console.log(myStack.printStack());
