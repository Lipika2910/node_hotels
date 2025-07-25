const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to mongodb');
});

db.on('error', (err) => {
    console.log('connected to error', err);
});

db.on('disconnected', () => {
    console.log('connected to disconnected')
});


module.exports = db;
