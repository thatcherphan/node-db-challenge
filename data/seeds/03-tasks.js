
exports.seed = function(knex) {
  return knex('tasks').insert([
    { id: 1, description: "pick up trash", notes: "", completed: true, project_id: 1 },
    { id: 2, description: "vacuum room", notes: "empty out vacuum", completed: false, project_id: 1 },
    { id: 3, description: "organize closet", notes: "do laundry first", completed: false, project_id: 1 },
    { id: 4, description: "charge laptop", notes: "", completed: true, project_id: 2 },
    { id: 5, description: "watch lecture", notes: "", completed: false, project_id: 2 },
    { id: 6, description: "Reset game", notes: "", completed: true, project_id: 3 },
    { id: 7, description: "charge headphones", notes: "", completed: false, project_id: 3 }
  ])
};
