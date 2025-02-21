function deepFilterFolders(obj) {
	let res = [];

	function helper(obj, res, path = '') {
		for (let key in obj) {
			let curr = obj[key];

			let newPath = path ? `${path}/${key}` : key;

			if (Object.prototype.toString.call(curr) === '[object Object]') {
				helper(curr, res, newPath);
			} else if (curr === 'file') {
				res.push(newPath);
			}
		}
	}
	helper(obj, res, '');
	return res;
}

const complexFolderStructure = {
	src: {
		components: {
			Button: {
				'index.js': 'file',
				'style.css': 'file',
				tests: {
					'button.test.js': 'file',
				},
			},
			Header: {
				'header.js': 'file',
				'header.css': 'file',
				assets: {
					images: {
						'logo.png': 'file',
						'banner.jpg': 'file',
					},
				},
				test: {},
			},
		},
	},
};

console.log('Result', deepFilterFolders(complexFolderStructure));
