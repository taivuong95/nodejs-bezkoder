const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: String
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;

