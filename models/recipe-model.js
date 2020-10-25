const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
        .innerJoin("recipes as r", "r.id", "ri.recipe_id")
        .innerJoin("ingredients as i", "i.id", "ri.ingredient_id")
        .where("r.id", recipe_id)
        .select([
            "i.name",
            "ri.quantity"
        ])
}

function getInstructions(recipe_id) {
    return db("instructions as i")
        .leftJoin("recipes as r", "r.id", "i.recipe_id")
        .where("r.id", recipe_id)
        .select("i.instruction_number", "i.procedure")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}