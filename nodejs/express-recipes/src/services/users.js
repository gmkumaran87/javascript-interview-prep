require('dotenv').config();
const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userFilePath = path.join(__dirname, '../../db/users.json');

const findUser = async ({ id, email }) => {
	const users = JSON.parse(
		await fs.readFile(userFilePath, 'utf8', (err, data) => {
			if (err) throw err;
			console.log(data);
		})
	);
	return users.find((el) => el.id === parseInt(id) || el.email === email);
};

const createUser = async ({ email, name, password }) => {
	const users = JSON.parse(await fs.readFile(userFilePath));

	const newUser = {
		id: users.length + 1,
		email,
		name,
		password: await bcrypt.hash(password, 10),
	};

	console.log('New user before', newUser);
	const token = jwt.sign({ id: newUser.id }, 'JWT_SECRET', { expiresIn: 24 * 60 * 60 });

	users.push(newUser);

	await fs.writeFile(userFilePath, JSON.stringify(users));

	return token;
};

const authenticate = async ({ email, password }) => {
	const user = await findUser({ email });

	const isPasswordValid = await bcrypt.compare(password, user.password);

	const token = await jwt.sign({ id: user.id }, 'JWT_SECRET', { expiresIn: 24 * 3600 });

	return token;
};

module.exports = { createUser, findUser, authenticate };
