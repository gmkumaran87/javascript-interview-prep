const asyncTask = function (i) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`Completing ${i}`), 100 * i);
	});
};

const promises = [asyncTask(3), asyncTask(1), asyncTask(7), asyncTask(2), asyncTask(5)];

function asyncSeries(promises) {
	const promise = promises.shift();

	promise.then((data) => {
		console.log(data);
	});

	if (promises.length) {
		asyncSeries(promises);
	}
}

async function asyncSeries2(promises) {
	for (let promise of promises) {
		try {
			const data = await promise;
			console.log('Data', data);
		} catch (error) {}
	}
}
asyncSeries2(promises);
