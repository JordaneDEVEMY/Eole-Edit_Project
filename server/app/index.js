const express = require('express');
const cors = require('cors');

const router = require('./routes');

const app = express();

// Activation of Json middleware
app.use(express.json());
// Activation of payload urlencoded parser middleware
app.use(express.urlencoded({ extended: true }));
// Activation of public's folder
app.use(express.static('app/public'));

// No Restriction CORS
app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(router);

module.exports = app;
