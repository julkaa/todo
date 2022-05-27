const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

require('./routes/routes')(app);

const db = require('./config/db.config');


app.set('port', process.env.PORT || 3500);





module.exports = app;
