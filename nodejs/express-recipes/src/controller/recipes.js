const { getAllRecipes, save, get, update } = require('../services/recipes');

const getAll = async (req, res, next) => {
	try {
		const result = await getAllRecipes();

		res.json({ data: result });
	} catch (error) {
		next(error);
	}
};

const getRecipe = async (req, res, next) => {
	try {
		const result = await get(req.params.id);

		if (result === undefined) {
			const err = new Error('Recipe not found');
			err.statusCode = 404;
			throw err;
		}
		res.json({ data: result });
	} catch (error) {
		next(error);
	}
};
const addRecipe = async (req, res, next) => {
	console.log('Recipe added', req.body);
	try {
		const { name, healthLabels, cookTimeMinutes, prepTimeMinutes, ingredients } = req.body;

		const newRecipe = {
			name,
			healthLabels: [...healthLabels],
			cookTimeMinutes,
			prepTimeMinutes,
			ingredients: [...ingredients],
		};
		console.log('*****************************************');
		const result = await save(newRecipe);
		res.status(201).json({ data: result });
	} catch (error) {
		console.log('Error saving', error);
	}
};

const updateRecipe = async (req, res, next) => {
	try {
		const id = req.params.id;
		const { name, healthLabels, cookTimeMinutes, prepTimeMinutes, ingredients } = req.body;

		const recipe = await get(id);

		if (recipe === undefined) {
			const err = new Error('Recipe not found');
			err.statusCode = 404;
			throw err;
		}
		const result = await update(id, {
			name,
			healthLabels: [...healthLabels],
			cookTimeMinutes,
			prepTimeMinutes,
			ingredients: [...ingredients],
		});

		res.send(200).json({ data: result });
	} catch (error) {
		next(error);
	}
};
module.exports = { getAll, addRecipe, getRecipe, updateRecipe };
