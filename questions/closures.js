/*Lexical Scope
A lexical scope allows a function scope to access variables in the outer scope. The outer scope is deteremined wrt to function definition only were we have defined the function code in js file .
Note : fn call is not used to determine the outer scope
Example: */

var varName = 10;
/**fn def*/
function b() {
	console.log('in b', varName);
}
function fn() {
	var varName = 20;
	/**fn call*/
	b();
	console.log(varName); //20
}

fn();
// Output
// in b 10
// 20

/*In the above code varName has a global scope since it is defined outside the function
Inside the fn function, there's a local variable also named varName. This local variable takes precedence over the global one when referenced within the fn function.
When the b function is called from within the fn function, it references the varName variable. Since there is no varName declared within the b function's scope, it looks for the nearest enclosing scope, which is the fn function definition. It finds the local varName declared in fn and uses that value. */

let iamNGEC = 200;

function getFirstName(firsName) {
	console.log(`My first name is ${firsName} and my age is ${iamNGEC}`);

	return function getLastName(lastName) {
		console.log(`My last name is ${lastName}`);

		return function greet() {
			console.log(`My fullname is ${firsName} ${lastName} `);
			console.log(`I am ${iamNGEC} years old.`);
		};
	};
}

/*const fnNameRtrn = getFirstName('Jasbir');
// console.log(fnNameRtrn); // getLastname

const lnNameRtrn = fnNameRtrn('Singh');
// console.log(lnNameRtrn);  // greeter

lnNameRtrn(); */

/*Application of Closures
Listed below are the application of closure

5.1 Currying
Currying involves splitting up a function that accepts multiple arguments into several functions that only accept one parameter each.
It allows you to provide some arguments upfront while delaying the provision of others.
*/

getFirstName('Kavin')('Muthukumaran')();

function outer() {
	let arrFn = [];
	for (var i = 0; i < 3; i++) {
		arrFn.push(function fn() {
			i++;
			console.log(i);
		});
	}
	return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

function add(a, b) {
	return a + b;
}

const empty = () => 0;
const square = (a) => a * a;
const mul = (a, b) => a * b;

function curry(func) {
	// throw 'Not implemented!';
	return function inner(...args) {
		console.log(args, func.length);
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return (...nexArgs) => curry(func.bind(this, ...nexArgs))(nexArgs);
		}
	};
}
console.log('********************************');
const curried = curry(add);
const emptyCurried = curry(empty);

console.log('After curry', curried(3)(7)); // 10
console.log('Empty curry', emptyCurried()); // 0
