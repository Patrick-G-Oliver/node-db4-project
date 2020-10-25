const express = require("express")
const recipeModel = require("../models/recipe-model")

const router = express.Router()

router.get("/recipes", async (req, res, next) => {
	try {
		const recipes = await recipeModel.getRecipes()
		res.json(recipes)
	} catch(err) {
		next(err)
	}
})

router.get("/recipes/:id/ingredients", async (req, res, next) => {
	try {
		const ingredients = await recipeModel.getShoppingList(req.params.id)
		res.json(ingredients)
	} catch (err) {
		next(err)
	}
})

router.get("/recipes/:id/instructions", async (req, res, next) => {
	try {
		const instructions = await recipeModel.getInstructions(req.params.id)
		if (!instructions) {
			return res.status(404).json({
				message: "instructions not found",
			})
		}

		res.json(instructions)
	} catch(err) {
		next(err)
	}
})

module.exports = router