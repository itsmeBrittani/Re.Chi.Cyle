const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 5000;
const dbName = 'RCCEvents';
const db = mongoose.connection;

const eventController = require('./controllers/RCC.js');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept');
        next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(morgan('tiny'));

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;


mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });
db.once('open', () => {
    console.log('connected to mongo');
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use('/action', eventController);

app.get('/', (req, res) => {
    res.send('Welcome to Re-Chi-Cyle');
});

if (process.env.NODE_ENV === 'production') {
    app.usrse(express.static('Re-Chi-Cyle/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Re-Chi-Cyle', 'dist', 'index.html'))
    })
}

//LISTENER
app.listen(port, () => {
    console.log(`Ready for your orders on port ${port}, Goddess!!`);
});