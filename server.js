// REQUIRE DOTENV/MLAB CONNECTION
require('dotenv').config();

// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    joyModel = require('./info/joy'),
    dataEnds = require('./info/dataEnds'),
    PORT = process.env.PORT || 3000;

// DATABASE
require('./db');

// CONFIGURATIONS


// MIDDLEWARE
// CONNECT TO PUBLIC FOLDER:
app.use(express.static(path.join(__dirname, 'public','views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(logger('dev'));


// ROUTES
const projectRouter = require('./routers/projectRouter');
app.use('/api/projects', projectRouter);

// HARD-CODED ROUTES/PATHS
app.get('/api/profile', (req, res) => { res.json( joyModel ); });
app.get('/api', (req, res) => { res.json( dataEnds ); })

// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Listening on ${PORT}`);
});