const db = require('../data/db-config');

module.exports = {
    getResources,
    getResourcesById,
    addResources
    // getTasks,
    // addTask
}

function getResources() {
    return db('resources')
}

function getResourcesById(id) {
    return db('resources')
        .where({id})
        .first()
  }

function addResources(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => getResourcesById(id));
}