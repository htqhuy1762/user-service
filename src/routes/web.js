const express = require('express');
const { getHomepage, getABC, getHoidanit, postCreateUser, getCreatePage } = require('../controllers/homeController');
const router = express.Router();

// Route definition
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoidanit);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router; // export default
