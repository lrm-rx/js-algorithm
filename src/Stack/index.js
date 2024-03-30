import Stack from "./stack";
import dec2bin from './dec2bin';

const stack = new Stack();

// push
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
console.log(stack.items); // [100, 200, 300, 400]

// pop
console.log(stack.pop()); // 400

// isEmpty()
console.log(stack.isEmpty()); // false

// peek()
console.log(stack.peek()); // 300

// size()
console.log(stack.size()); // 3

// toString()
console.log(stack.toString()); // 100 200 300

// dec2bin() 
console.log(dec2bin(100)); //--> 1100100
