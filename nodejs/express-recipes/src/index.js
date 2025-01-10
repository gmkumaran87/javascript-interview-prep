const express = require('express');
const path = require('path');
const cors = require('cors');
const recipesRouter = require('./routers/recipes');
const { handleError } = require('./utils/error');
const auth = require('./middleware/auth');
const userRouter = require('./routers/users');

const app = express();

app.use(cors());
//Middlewares
app.use((req, res, next) => {
	const { method, path } = req;

	console.log(`Method: ${method} Path: ${path} at ${new Date().toISOString()}`);

	next();
});
// Serve static files from the "public" directory
// const publicDirectory = path.join(__dirname, './public');
// app.use(express.static(publicDirectory));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth.initialize());

app.get('/', (req, res) => {
	res.redirect('/api/v1/recipes');
});
app.use('/api/v1/recipes', recipesRouter);
app.use('/api/v1/users', userRouter);

app.use(handleError);
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
