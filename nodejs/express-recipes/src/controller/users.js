const { findUser, createUser, authenticate } = require('../services/users');

const handleSignup = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;
		// console.log('Inside controller', email, name, password);

		const user = await findUser({ email });

		if (user) {
			throw new Error('User already exists');
		}

		const token = await createUser({ email, name, password });

		res.json({ msg: 'User created successfully', token });
	} catch (error) {
		next(error);
	}
};

const handleLogin = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		console.log('Hndl login', email, password);
		const user = await findUser({ email });

		if (!user) {
			throw new Error('Username not found');
		}
		console.log('User in LOGIN', user);
		const token = await authenticate({ email, password });
		res.json({ msg: 'Success', token });
	} catch (error) {
		next.error;
	}
};

module.exports = { handleLogin, handleSignup };
