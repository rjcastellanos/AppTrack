const mongoose = require('mongoose');

const URL = 'mongodb://localhost/db_papeleria';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('DB connected')
});