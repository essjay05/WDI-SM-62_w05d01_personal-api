// REQUIRE DOTENV/MLAB CONNECTION
require('dotenv').config();

// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3000;

// DATABASE
require('./db');

// CONFIGURATIONS


// MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));


// ROUTES
app.get('/profile', (req, res) => {
    if (err) res.json({ success: false, err });
    res.json({
        success: true,
        name: "Joy Serquina",
        githubUsername

    })

})

// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Listening on ${PORT}`);
});