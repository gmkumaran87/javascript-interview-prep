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

console.log('Flattened obj', flatten(obj)); // Output: a.b,a.c.d,a.c.e
