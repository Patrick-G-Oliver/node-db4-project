const express = require("express")
const ingredientModel = require("../models/ingredient-model")

const router = express.Router()

router.get("/ingredients/:id/recipes", async (req, res, next) => {
	try {
		const recipes = await ingredientModel.getRecipesByIngredient(req.params.id)
		if (!recipes) {
			return res.status(404).json({
				message: "recipes not found",
			})
		}

		res.json(recipes)
	} catch(err) {
		next(err)
	}
})

module.exports = router