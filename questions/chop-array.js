/**
 * Write a function to chop an array into chunks of a given length and
   return each chunk as an array without modifying the input array.
 */

function chop(arr, size = arr.length) {
	let out = [],
		i = 0;
	if (size > arr.length) return arr;

	while (i < arr.length) {
		console.log('ivalue', i, size);

		out.push(arr.slice(i, i + size));
		i = i + size;
	}
	return out;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = chop(arr, 4);
console.log('Output: ', output);
