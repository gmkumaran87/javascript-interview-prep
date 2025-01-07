const sleep = (value, delay, isRejct = false) => {
	return new Promise((resolve, reject) => {
		if (isRejct) {
			setTimeout(reject(new TypeError(`Promise rejected - ${value}`)), delay);
		}
		setTimeout(resolve(value), delay);
	});
};

const p1 = sleep('Hello 1000', 1000);
const p2 = sleep('Reject Promise', 500, false);
const p3 = sleep('300', 300);

Promise.myPromiseAll = function (promises) {
	let result = [],
		count = 0;

	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new TypeError('Promises must be an array'));
		}
		if (promises.length === 0) {
			resolve(result);
		}
		promises.forEach((promise) => {
			promise
				.then((res) => {
					result.push(res);
					count++;
					if (count === promises.length) {
						resolve(result);
					}
				})
				.catch((err) => reject(err));
		});
	});
};

Promise.myPromiseAll([p1, p2, p3]).then((res) => console.log(res));

Promise.any([p1, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
