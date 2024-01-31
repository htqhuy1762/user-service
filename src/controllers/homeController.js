const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDservice');

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUser: results });
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const User = require('../models/user');

const getHoidanit = (req, res) => {
    res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await User.create({
        email,
        name,
        city,
    });

    res.send('User created successfully!');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user });
};

const postUpdateUser = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await User.updateOne({ _id: userId }, { email, name, city });
    
    res.redirect('/');
};

const postDeleteUser = async (req, res) => {
    // let userId = req.body.userId;
    // await connection.query(`DELETE FROM Users WHERE id = ?`, [userId]);
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await User.deleteOne({ _id: id });
    res.redirect('/');
};

module.exports = {
    getHomepage,
    getABC,
    getHoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
};
