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

module.exports = router