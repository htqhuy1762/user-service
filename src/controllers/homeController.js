const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const getHoidanit = (req, res) => {
    res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    connection.query(
        `INSERT INTO 
        Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (error, results) {
            console.log(results);
            res.send('User created successfully!');
        }
    );    
};

module.exports = {
    getHomepage,
    getABC,
    getHoidanit,
    postCreateUser,
};
