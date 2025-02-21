// logger.js
const isProd = process.env.NODE_ENV === 'production';

export const log = (message, ...args) => {
	if (!isProd) {
		console.log(message, ...args);
	} else {
		// Optionally send log to remote logging service or your backend API
		fetch('/api/log', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, args, timestamp: Date.now() }),
		});
	}
};

export const error = (message, ...args) => {
	if (!isProd) {
		console.error(message, ...args);
	} else {
		// Optionally send error log to remote logging service
		fetch('/api/log-error', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message, args, timestamp: Date.now() }),
		});
	}
};

import { log, error } from './logger';

function MyComponent() {
	log('Component rendered successfully');

	try {
		// Some operation that might fail
	} catch (err) {
		error('An error occurred in MyComponent', err);
	}

	return <div>My Component</div>;
}
