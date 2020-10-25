exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Same Day White Bread"},
    { name: "Overnight 40% Whole Wheat Bread"},
  ]);
};
