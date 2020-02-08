const db = require('../data/db-config');

module.exports = {
    getTasks,
    getTaskByID,
    addTask
}

function getTasks() {
    return db('tasks')
}

function getTaskByID(id) {
    return db('tasks')
        .where({id})
        .first()
  }

function addTask(task) {
    return db('resources')
        .insert(task, 'id')
        .then(([id]) => getTaskByID(id));
}