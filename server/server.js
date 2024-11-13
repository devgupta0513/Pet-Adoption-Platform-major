require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const userRoutes = require('./Routes/userRoutes');
const AdminRoute = require('./Routes/AdminRoute');
const { notFound, errorHandler } = require("./middlewares/errrorMIddleware");
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');

const app = express();

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(petRouter)
app.use('/form', AdoptFormRoute)
app.use('/admin', AdminRoute)
app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)



connectDB()
    .then(() => {
        console.log('Connected to DB');
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })