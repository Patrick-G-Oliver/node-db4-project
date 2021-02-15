exports.seed = async function(knex) {
  await knex("instructions").insert([
    { instruction_number: 1, procedure: "mix dough", recipe_id: 1},
    { instruction_number: 2, procedure: "ferment dough for 6 hours", recipe_id: 1},
    { instruction_number: 3, procedure: "divide, shape, & proof", recipe_id: 1},
    { instruction_number: 4, procedure: "bake off & cool", recipe_id: 1},
    { instruction_number: 1, procedure: "mix dough with autolyse", recipe_id: 2},
    { instruction_number: 2, procedure: "ferment overnight", recipe_id: 2},
    { instruction_number: 3, procedure: "divide, shape, & retard", recipe_id: 2},
    { instruction_number: 4, procedure: "score, bake off, & cool", recipe_id: 2},
  ]);
};