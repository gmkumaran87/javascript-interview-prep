const fs = require('fs').promises;
const path = require('path');

const recipesFilePath = path.join(__dirname, '../../db/recipes.json');

const getAllRecipes = async () => {
	const recipes = await fs.readFile(recipesFilePath);

	return JSON.parse(recipes);
};

const get = async (id) => {
	try {
		const allRecipes = await getAllRecipes();

		const recipe = allRecipes.find((el) => el.id === parseInt(id));
		return recipe;
	} catch (error) {}
};
const save = async (recipe) => {
	try {
		const result = await getAllRecipes();

		// recipe.id = result.length + 1;

		const newRecipe = { id: result.length + 1, ...recipe };

		result.push(newRecipe);

		// console.log('recipes saving', result);
		const data = await fs.writeFile(recipesFilePath, JSON.stringify(result));

		return recipe;
	} catch (error) {
		console.log('recipes saving', error);
	}
};

const update = async (id, updatedRecipe) => {
	try {
		const allRecipes = await getAllRecipes();

		updatedRecipe.id = parseInt(id);

		const updated = allRecipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe));

		return updated;
	} catch (error) {}
};
module.exports = { getAllRecipes, save, get, update };
