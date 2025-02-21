import { useEffect, useState } from 'react';
import { asyncTask, createChunk } from './util';
import axios from 'axios';

const promises = [
	asyncTask(1),
	asyncTask(2),
	asyncTask(3),
	asyncTask(4),
	asyncTask(5),
	asyncTask(6),
	asyncTask(7),
	asyncTask(8),
	asyncTask(9),
	asyncTask(10),
	asyncTask(11),
	asyncTask(12),
	asyncTask(13),
	asyncTask(14),
	asyncTask(15),
	asyncTask(16),
];

const imageUrls = [
	'https://picsum.photos/200?random=1',
	'https://picsum.photos/200?random=2',
	'https://picsum.photos/200?random=3',
	'https://picsum.photos/200?random=4',
	'https://picsum.photos/200?random=5',
	'https://picsum.photos/200?random=6',
	'https://picsum.photos/200?random=7',
	'https://picsum.photos/200?random=8',
	'https://picsum.photos/200?random=9',
	'https://picsum.photos/200?random=10',
];

const BATCH_COUNT = 4;
function App() {
	const [count, setCount] = useState(0);

	const asynCalls = async (promises) => {
		// console.log('promises', promises);
		try {
			const result = await Promise.all(promises.map((url) => axios.get(url, { responseType: 'blob' })));

			const newImages = result.map((res) => URL.createObjectURL(res.data));

			console.log('Api response', newImages);
		} catch (error) {
			console.log('Api error', error);
		} finally {
			setCount((prev) => prev + 1);
		}
	};

	useEffect(() => {
		if (count * BATCH_COUNT >= imageUrls.length) return;
		const promiseArr = createChunk(imageUrls, BATCH_COUNT);

		const timer = setTimeout(() => {
			asynCalls(promiseArr[count]);
		}, 1500);

		console.log('Finished batch', count);

		return () => clearTimeout(timer);
		// console.log('PromiseArrays', promiseArr);
	}, [count]);

	return (
		<div>
			<h1> Batch Api calls in Sequence</h1>
			<p>
				You are given an info-graphic component where you have to batch call APIs in sequence. Let’s say you
				have 20 APIs to call, batch call 5 APIs together, and the next 5 after the previous one is done, and so
				on. The first call will take after a delay of 5 seconds and once all the APIs are executed, reset and
				start from the beginning.
			</p>
			<p>
				Example Input: // API calls [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] //
				[1, 2, 3, 4, 5] // first call after 5 seconds // [6, 7, 8, 9, 10] // second call // [11, 12, 13, 14, 15]
				// third call // [16, 17, 18, 19, 20] // fourth call
			</p>
		</div>
	);
}

export default App;
