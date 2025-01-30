function flatten(obj, parentKey = '', res = {}) {
	for (let key of Object.keys(obj)) {
		const newKey = parentKey ? `${parentKey}.${key}` : key;

		let curr = obj[key];

		if (Object.prototype.toString.call(curr) === '[object Object]') {
			flatten(curr, newKey, res);
		} else {
			res[newKey] = curr;
		}
	}

	return res;
}

const obj = {
	a: {
		b: 2,
		c: {
			d: 4,
			e: 5,
		},
	},
};

// console.log('Flattened obj', flatten(obj)); // Output: a.b,a.c.d,a.c.e

function fibonacci(n, cache = {}) {
	console.log(n, cache);
	if (cache[n] !== undefined) return cache[n];

	if (n === 0) return 0;
	if (n === 1) return 1;

	cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
	return cache[n];
}

console.log('Result', fibonacci(500, {}));
