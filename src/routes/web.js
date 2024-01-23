const express = require('express');

const router = express.Router();

// khai bao route
router.get('/', (req, res) => {
    res.send('Hello World BRO!')
});

router.get('/abc', (req, res) => {
    res.send('Check ABC')
});

router.get('/hoidanit', (req, res) => {
    res.render('sample.ejs');
});

module.exports = router; // export default