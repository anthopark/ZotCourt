const mongoose = require('mongoose');
const Court = require('./models/court');

const DB_URI = process.env.ATLAS_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', async () => {
    console.log('MongoDB database connection established successfully');

});