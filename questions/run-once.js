function once(callback) {
	let called = false;
	let cache = undefined;

	return function (...args) {
		if (!called) {
			called = true;
			cache = callback.apply(this, args);
		}
		return cache;
	};
}

function limit(callback, n) {
	let count = 0;
	console.log('Limit called', n);
	return function () {
		if (count < n) {
			count++;
			return callback.apply(this, arguments);
		} else {
			console.log('Limit exceeded');
			return;
		}
	};
}

function makeApiCall() {
	// Simulate an API call
	console.log('API call completed');
}

const wrapper = once(makeApiCall);

wrapper(); // Simulate the first API call
wrapper(); // Simulate the second API call (should not call makeApiCall again)
wrapper();

const limitter = limit(makeApiCall, 2);
limitter();
limitter();
limitter();

function sum(...rest) {
	const a = rest.reduce((acc, rest) => acc + rest, 0);

	return (...b) => {
		if (b?.length > 1) {
			const tot = b.reduce((acc, curr) => acc + curr, 0);

			return sum(tot + a);
		} else {
			return a;
		}
	};
}

/*function summer(a) {
	return (b) => {
		if (b) {
			return summer(a + b);
		} else {
			return a;
		}
	};
}*/

const total = sum(1, 2, 3)(2, 3)(4, 5)();
console.log(total);

const resultSum = summer(5)(7)(10)(55);
console.log(resultSum);

function summer(a) {
	console.log('A value', a);
	return (b) => {
		console.log('B value', b);
		if (b) {
			return summer(a + b);
		} else {
			return a;
		}
	};
}
