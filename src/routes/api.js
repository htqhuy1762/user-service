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

module.exports = routerAPI; // export default
