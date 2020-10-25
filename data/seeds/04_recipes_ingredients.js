// exports.seed = async function(knex) {
//   await knex("recipes_ingredients").insert([
//     { recipe_id: 1, ingredient_id: 1, ingredient_name: "1 gram white flour", quantity: 1000 },
//     { recipe_id: 1, ingredient_id: 3, ingredient_name: "1 gram water", quantity: 720 },
//     { recipe_id: 1, ingredient_id: 4, ingredient_name: "1 salt", quantity: 21 },
//     { recipe_id: 1, ingredient_id: 5, ingredient_name: "1 instant yeast", quantity: 4 },
//     { recipe_id: 2, ingredient_id: 1, ingredient_name: "1 gram white flour", quantity: 600 },
//     { recipe_id: 2, ingredient_id: 2, ingredient_name: "1 gram whole wheat flour", quantity: 400 },
//     { recipe_id: 2, ingredient_id: 3, ingredient_name: "1 gram water", quantity: 800 },
//     { recipe_id: 2, ingredient_id: 4, ingredient_name: "1 salt", quantity: 22 },
//     { recipe_id: 2, ingredient_id: 5, ingredient_name: "1 instant yeast", quantity: 3 },
//   ]);
// };

exports.seed = async function(knex) {
  await knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1000 },
    { recipe_id: 1, ingredient_id: 3, quantity: 720 },
    { recipe_id: 1, ingredient_id: 4, quantity: 21 },
    { recipe_id: 1, ingredient_id: 5, quantity: 4 },
    { recipe_id: 2, ingredient_id: 1, quantity: 600 },
    { recipe_id: 2, ingredient_id: 2, quantity: 400 },
    { recipe_id: 2, ingredient_id: 3, quantity: 800 },
    { recipe_id: 2, ingredient_id: 4, quantity: 22 },
    { recipe_id: 2, ingredient_id: 5, quantity: 3 },
  ]);
};
