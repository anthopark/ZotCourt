const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
    courtId: Number,
    courtName: String,
    streetAddr: String,
    restAddr: String,
    occupied: Boolean,
    checkedIn: Number,
});

const Court = mongoose.model('Court', courtSchema);





module.exports = Court;
