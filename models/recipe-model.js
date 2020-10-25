const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients")
}

function getInstructions(recipe_id) {
    return db("instructions")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}