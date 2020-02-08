const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectById,
    addProject
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
        .where({id})
        .first()
  }

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => getProjectById(id));
}
