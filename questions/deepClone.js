function deepClone(obj) {
	let newObj = obj;
	if (obj && typeof obj !== 'object') {
		return obj;
	} else {
		newObj = Array.isArray(obj) ? [] : {};

		for (let key of Object.keys(obj)) {
			let curr = obj[key];
			newObj[key] = deepClone(curr);
		}
	}
	return newObj;
}

const obj = {
	name: 'Muthu',
	age: 35,
	address: {
		no: 26,
		street: 'Pillaiyar Kovil 4th cross',
		city: 'Perungudi',
	},
};

console.log('Output', deepClone(obj));
