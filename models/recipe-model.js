const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

/* getRecipes() translates as:

SELECT *
FROM recipes
*/

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

/* getShoppingList() translates as:

SELECT i.name, ri.quantity
FROM recipes_ingredients AS ri
JOIN recipes AS r ON r.id = ri.recipe_id
JOIN ingredients AS i ON i.id = ri.ingredient_id
WHERE r.id = ?
*/

function getInstructions(recipe_id) {
    return db("instructions as i")
        .leftJoin("recipes as r", "r.id", "i.recipe_id")
        .where("r.id", recipe_id)
        .select("i.instruction_number", "i.procedure")
}

/* getInstructions() translates as:

SELECT i.instruction_number, i.procedure
FROM instructions AS i
LEFT JOIN recipes AS r ON r.id = i.recipe_id
WHERE r.id = ?
*/

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}