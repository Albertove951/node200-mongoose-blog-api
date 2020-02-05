const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/"
mongoose.connect(url + 'my-blog',{ useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connect(url + 'blogs',{ useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connect(url +'users', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;
