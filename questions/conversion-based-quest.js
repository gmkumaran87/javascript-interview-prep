/*1. Unary + Operator
When + is used with one operand (unary operator), it attempts to convert the operand into a number.*/

//Example:

console.log(+'4'); // Output: 4 (string converted to number)
console.log(+'10.5'); // Output: 10.5
console.log(+'abc'); // Output: NaN (not a valid number)

/* 2. Binary + Operator
When + is used with two operands (binary operator), it operates as:

Addition: If both operands are numbers.
String Concatenation: If at least one operand is a string.
Examples: */
console.log(1 + 2); // Output: 3 (number addition)
console.log('Hello ' + 3); // Output: "Hello 3" (string concatenation)
console.log(1 + '3'); // Output: "13" (string concatenation)

/*Edge Cases
String Concatenation:
If one operand is a string, the other operand is converted to a string:
*/
console.log('5' + 3 + 2); // Output: "532" (left-to-right concatenation)
console.log(3 + 2 + '5'); // Output: "55" (3 + 2 first, then concatenated with '5')

/*Conversion Before Addition:
You can explicitly convert values to numbers using + before adding:
*/
console.log(+'5' + 3); // Output: 8
console.log(+'5' + +'3'); // Output: 8

/*The ! (Logical NOT) Operator:

The ! operator inverts the boolean value of its operand:
If the operand is truthy, it returns false.
If the operand is falsy, it returns true. */

// Truthy or Falsy Questions
console.log(!'Tomato'); // Output: false
console.log(!!'Tomato'); // Output: true (Double NOT to get the original truthiness)
console.log(!''); // Output: true (Empty string is falsy)

console.log(!!''); // ?
console.log(!!0); // ?
console.log(!!'0'); // ?
console.log(!!null); // ?
console.log(!!undefined); // ?
console.log(!!NaN); // ?

console.log('Equality....');
console.log('' == 0); // type coerced hence true
console.log('' === 0); // Compares its type hence it is false
console.log(false == 0); // ?
console.log(false === 0); // ?

// 2. Type Coercion
console.log('Type Coercion');

console.log(1 + '2'); // 12
console.log('1' - 1); //  0
console.log(2 * '3'); //  6
console.log('4' / 2); // 2
console.log('5' - true); // 4
console.log('6' + true); // 6true

console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(false + true); // 1
console.log(true + true); // 2

// 3. Logical Operators
console.log('Logical Operator');

console.log('Apple' || 'Banana'); // 'Apple'
console.log('' || 'Banana'); // Banana
console.log('Apple' && 'Banana'); // Banana
console.log(null && 'Banana'); // null
console.log(false || 'Grapes'); // Grapes

const a = null || 0 || 'Hello';
const b = 'World' && 0 && '!';
console.log(a); // Hello
console.log(b); // 0

// 4. Comparison Operators
console.log('Comparison Operator');

console.log(5 > '4'); // true
console.log(5 < '6'); // true
console.log('5' == 5); // true
console.log('5' === 5); // false
console.log('five' > 4); // ?

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log([] == false); // true
console.log([] === false); // ?\false
console.log([1] == true); // true

// Special Cases
console.log('Special Case');
console.log(typeof NaN); // ?
console.log(NaN == NaN); // ?
console.log(Number('text')); // ?

console.log(true + true); // ?

// 8. Objects and Arrays
console.log('\nObjects and Arrays');
const obj = { a: 1, b: 2 };
console.log(obj.toString()); // ?
console.log(JSON.stringify(obj)); // ?

const arr = [1, 2, 3];
arr[5] = 5;
console.log(arr); // ?

console.log([] + []); // ?
console.log([] + {}); // ?
console.log({} + []); // ?
