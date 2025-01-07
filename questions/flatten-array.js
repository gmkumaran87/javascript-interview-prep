function flatten(arr, res = []) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatten(arr[i], res);
		} else {
			res.push(arr[i]);
		}
	}
	return res;
}

const arr = [1, 4, [66, 2, [23, 5, 1, [45, 22]]], 5, 2];

console.log('Flattening...', flatten(arr));
