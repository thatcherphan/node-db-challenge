const db = require('../data/db-config');

module.exports = {
    getTasks,
    getTaskByID,
    addTask
}

function getTasks() {
    return db('tasks as t')
        .select('t.id as task_id', 't.description as task_description', 't.notes as task_notes', 't.project_id', 
            'p.name as project_name', 'p.description as project_description', 't.completed' )
        .join('projects as p', 't.project_id', 'p.id')

}

function getTaskByID(id) {
    return db('tasks')
        .where({id})
        .first()
  }

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => getTaskByID(id));
}