const express = require('express');
const { getAll, addRecipe, getRecipe, updateRecipe } = require('../controller/recipes');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getRecipe);
router.post('/', addRecipe);
router.put('/', updateRecipe);

// Route 'GET', 'POST'
router.route('/').get(getAll).post(addRecipe);
router.route('/:id').get(getRecipe).put(updateRecipe);

module.exports = router;
