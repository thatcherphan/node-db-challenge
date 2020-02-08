
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    { id: 1, name: "Clean room", description: "get done ASAP", completed: false},
    { id: 2, name: "Do homework", description: "", completed: false},
    { id: 3, name: "Play game", description: "Not over 2 hours", completed: true}
  ])
};
