const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    // username: {type: String, required: true},
    date: {type: Date,required: true},
    activity: {type: String, required: true},
    subject: {type: String, required: true},
    group: {type: Number, required: true}
    
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;

