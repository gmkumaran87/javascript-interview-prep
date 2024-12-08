/***
 * Problem Statement -
   Create a function that memorizes or caches the result for the given
   input so that the subsequent calls for the same inputs will be faster.
 */

function memoized(func) {
	let cache = {};

	return function () {
		const args = JSON.stringify(arguments);

		if (cache[args]) {
			return cache[args];
		} else {
			const output = func.apply(this, arguments);
			cache[args] = output;
			return output;
		}
	};
}

const factorial = (n) => {
	if (n === 0 || n === 1) return 1;

	return factorial(n - 1) * n;
};

const memoizedFactorial = memoized(factorial);

console.log('First time', memoizedFactorial(20));
console.log('Second time', memoizedFactorial(20)); // should return the same result as the first call
