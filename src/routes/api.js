const express = require('express');
const routerAPI = express.Router();
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFilesAPI,
} = require('../controllers/apiController');
const {
    postCreateCustomerAPI,
    postCreateArrayCustomerAPI,
    getCustomersAPI,
    putUpdateCustomerAPI,
    deleteACustomerAPI,
    deleteCustomersAPI,
} = require('../controllers/customerController');

const {
    postCreateProjectAPI,
    getProjectsAPI,
    putUpdateProjectAPI,
    deleteProjectAPI,
} = require('../controllers/projectController');

const { postCreateTaskAPI, getTasksAPI, putUpdateTaskAPI, deleteTaskAPI } = require('../controllers/taskController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomerAPI);
routerAPI.post('/customers-many', postCreateArrayCustomerAPI);
routerAPI.get('/customers', getCustomersAPI);
routerAPI.put('/customers', putUpdateCustomerAPI);
routerAPI.delete('/customers', deleteACustomerAPI);
routerAPI.delete('/customers-many', deleteCustomersAPI);

routerAPI.get('/info', (req, res) => {
    return res.status(200).json({ data: req.query });
});

routerAPI.get('/info/:name/:address', (req, res) => {
    return res.status(200).json({ data: req.params });
});

routerAPI.post('/projects', postCreateProjectAPI);
routerAPI.get('/projects', getProjectsAPI);
routerAPI.put('/projects', putUpdateProjectAPI);
routerAPI.delete('/projects', deleteProjectAPI);

routerAPI.post('/tasks', postCreateTaskAPI);
routerAPI.get('/tasks', getTasksAPI);
routerAPI.put('/tasks', putUpdateTaskAPI);
routerAPI.delete('/tasks', deleteTaskAPI);

module.exports = routerAPI; // export default
