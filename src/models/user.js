const mongoose = require('mongoose');

// Schema định dạng hình thù của data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});
const User = mongoose.model('user', userSchema);

module.exports = User;