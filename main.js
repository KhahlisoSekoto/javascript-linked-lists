import { LinkedList } from './LinkedList.js';

const list = new LinkedList();
list.append("dog");
list.append("cat");

console.log("Starting List:", list.toString());

console.log("\n--- Testing Extra Credit: insertAt ---");
// This passes multiple arguments using the rest parameter (...values)
list.insertAt(1, "parrot", "hamster");
console.log("After insertAt(1):", list.toString());

console.log("\n--- Testing Extra Credit: removeAt ---");
// This should remove 'hamster' which is now at index 2
list.removeAt(2); 
console.log("After removeAt(2):", list.toString());