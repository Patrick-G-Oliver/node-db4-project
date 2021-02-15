exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "1 gram white flour"},
    { name: "1 gram whole wheat flour"},
    { name: "1 gram water"},
    { name: "1 gram salt" },
    { name: "1 gram instant yeast"},
  ]);
};