const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongo DB Connected')
})


//routes
const usersRouter = require('./route/users.js');
const exercisesRouter = require('./route/exercises.js');

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
})