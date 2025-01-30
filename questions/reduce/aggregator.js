/**
 * Group a certain set of values depending on our requirements.
 * const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];
 * output = {
                1:  [1.1, 1.2, 1.3],
                2: [2.2, 2.3, 2.4]
            }
 */

const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const groupedValues = arr.reduce((prev, curr, index, arr) => {
	const floored = Math.floor(curr);

	// Check in the object prev it exists
	if (prev[floored] === undefined) {
		prev[floored] = [];
	}

	prev[floored].push(curr);
	return prev;
}, {});

console.log('Grouped values', groupedValues);

/**
 * Run in sequence
 */

// functions
const upperCase = (str) => str.toUpperCase();

const reverse = (str) => str.split('').reverse().join('');

const append = (str) => 'Hello ' + str;

const arrFunc = [upperCase, reverse, append];

const initialValue = 'Muthukumaran';

const sequences = arrFunc.reduce((prev, curr) => {
	const newValue = curr(prev);

	return newValue;
}, initialValue);

console.log('Sequence values', sequences);

/** Promises sequence */

// helper function to create a promise
// that resolves after a certain time
const asyncTask = function (time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`Completing ${time}`), 100 * time);
	});
};
// create an array of task
const promises = [asyncTask(3), asyncTask(1), asyncTask(7), asyncTask(2), asyncTask(5)];

const output = Promise.all(promises);

output.then((el) => el.forEach((data) => console.log(data)));
