const db = require("../data/config")

function getRecipesByIngredient(ingredient_id) {
    return db("recipes_ingredients as ri")
        .innerJoin("recipes as r", "r.id", "ri.recipe_id")
        .innerJoin("ingredients as i", "i.id", "ri.ingredient_id")
        .where("i.id", ingredient_id)
        .select([
            "r.name"
        ])
}

/* getRecipesByIngredient() translates as:

SELECT r.name
FROM recipes_ingredients AS ri
JOIN recipes AS r ON r.id = ri.recipe_id
JOIN ingredients AS i ON i.id = ri.ingredient_id
WHERE i.id = ?

*/

module.exports = {
    getRecipesByIngredient,
}