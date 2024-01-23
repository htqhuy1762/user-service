const express = require('express');
const { getHomepage, getABC, getHoidanit } = require('../controllers/homeController');
const router = express.Router();

// khai bao route
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoidanit);

module.exports = router; // export default