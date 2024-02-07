const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService');

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.create({
        email,
        name,
        city,
    });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const putUpdateUserAPI = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.updateOne({ _id: userId }, { email, name, city });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;

    let user = await User.deleteOne({ _id: id });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let result = await uploadSingleFile(req.files.image);
    console.log('result = ', result);

    return res.send('File uploaded');
};

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    if (Array.isArray(req.files.images)) {
        let result = await uploadMultipleFiles(req.files.images);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    } else {
        return await postUploadSingleFileAPI(req, res);
    }
};

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFilesAPI,
};
