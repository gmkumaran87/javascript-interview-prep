/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE FUNCTION NAMES

function filter(collection, callback) {
	// DO NOT REMOVE
	'use strict';

	// write your code below
	let result = {};

	function filterWrapper(result, collection) {
		for (let key in collection) {
			let current = collection[key];

			// Check if the key is an object or non-primitive value
			if (Object.prototype.toString.call(current) === '[object]') {
				let nestedObj = {};

				filterWrapper(nestedObj, current);

				if (Object.keys(nestedObj).length > 0) {
					result[key] = nestedObj;
				}
			} else if (callback(current)) {
				result[key] = current;
			}
		}
	}

	filterWrapper(result, collection);

	return result;
}

const input = {
	a: 1,
	b: {
		c: 2,
		d: -3,
		e: {
			f: {
				g: -4,
			},
		},
		h: {
			i: 5,
			j: 6,
		},
	},
};

const callback = (element) => element >= 0;

const filtered = filter(input, callback);

// { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
console.log(filtered);
