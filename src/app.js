/* eslint-disable prettier/prettier */
require('dotenv').config();
const express = require('express');
const app = express();
const trackRouter = require('./api/tracks/track.route');
const albumRouter = require('./api/albums/album.route');
// Please keep this module.exports app, we need it for the tests !
app.use(express.json());
app.use('/api/tracks', trackRouter);
app.use('/api/albums', albumRouter);
module.exports = app;
