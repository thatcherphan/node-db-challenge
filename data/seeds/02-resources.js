
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {id: 1, name: "vacuum", description: "empty it out after finish using"},
    {id: 2, name: "trash bag", description: ""},
    {id: 3, name: "laptop", description: "charge after use"},
    {id: 4, name: "charger", description: ""},
    {id: 5, name: "headphones", description: ""},
    {id: 6, name: "game disk", description: "remember to put back disk in cover"}
  ])
};
