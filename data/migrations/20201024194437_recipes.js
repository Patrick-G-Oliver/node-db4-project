exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.integer("instruction_number").notNull()
        table.text("procedure").notNull()
        table
            .integer("recipe_id")
            .references("id")
            .inTable("recipes")
    })

    await knex.schema.createTable("recipes_ingredients", (table) => {
        table  
            .integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        table 
            .integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        table
            .float("quantity").notNull()
        table
            .primary(["recipe_id", "ingredient_id"])
    })
};
  
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};