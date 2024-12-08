Array.prototype.customMap = function (callback) {
	let result = [];

	for (let i = 0; i < this.length; i++) {
		result.push(callback(this[i], i, this));
	}
	return result;
};

Array.prototype.customFilter = function (callback) {
	let result = [];

	for (let i = 0; i < this.length; i++) {
		let filtered = callback(this[i], i, this);

		if (filtered) {
			result.push(this[i]);
		}
	}
	return result;
};

Array.prototype.customReduce = function (callback, initialValue) {
	let accum = initialValue !== undefined ? initialValue : this[0];
	let startIndex = initialValue !== undefined ? 0 : 1;

	for (let i = startIndex; i < this.length; i++) {
		accum = callback(accum, this[i], i, this);
	}
	return accum;
};
const arr = [1, 4, 2, 3];

console.log(
	'Mapped',
	arr.customMap((el) => el * 2)
);

console.log(
	'Filtered',
	arr.customFilter((el) => el >= 3)
);

console.log(
	'Filtered',
	arr.customReduce((accum, curr) => accum + curr, 0)
);
