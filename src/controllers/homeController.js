const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservice');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUser: results });
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const getHoidanit = (req, res) => {
    res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [
        email,
        name,
        city,
    ]);
    res.send('User created successfully!');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    res.render('edit.ejs');
};

module.exports = {
    getHomepage,
    getABC,
    getHoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
};
