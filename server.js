const express = require('express');

const projectsRouter = require('./routes/projectsRouter');
const resourceRouter = require('./routes/resourcesRouter');
const tasksRouter = require('./routes/tasksRouter');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "This projects API is ALIVE!"})
})

module.exports = server;