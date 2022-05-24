const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleBaseAuthSchema= new Schema({
    uid: {type: String, required: true},
    email: {type: String, required: true}
    
});

const Role = mongoose.model('Role', roleBaseAuthSchema);

module.exports = Role;