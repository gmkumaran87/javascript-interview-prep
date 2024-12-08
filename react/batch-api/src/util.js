export const asyncTask = (delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Task completed successfully: ${delay}`);
		}, delay);
	});
};

export const createChunk = (arr, size = arr.length) => {
	if (size >= arr.length) return arr;

	let chunks = [],
		i = 0;

	while (i < arr.length) {
		chunks.push(arr.slice(i, i + size));
		i += size;
	}
	return chunks;
};
