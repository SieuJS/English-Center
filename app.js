const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const userRoutes = require('./routes/users-routes');
const adminRoutes = require('./routes/admins/admin.r');
const coursesRoute = require("./routes/courses.r.js");
const studentRoute = require("./routes/student.r.js");
const tutorRoute = require("./routes/tutor.r.js");
const HttpError = require('./models/http-error');
const mongoose = require("mongoose");
const port = 5000;
const app = express();
app.use(session({
    secret: 'HighFiveSessionSecret',
    resave: false,
    saveUninitialized: false,
}));

app.use(bodyParser.json());

app.use ((rep,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/courses', coursesRoute);
app.use('/api/student', studentRoute);
app.use('/api/tutor', tutorRoute);
app.use((error, req, res, next) => {
    // Check that Have the res been sent ?
    if (req.headerSent) {
        return next(error);
    }
    // Check the status and set it 
    res.status(error.code || 500);
    // Leave the message 
    res.json({ message: error.message || "There some errors occured " });
})


const uri = "mongodb+srv://hfadmin:admin123@cluster0.z4pgyu9.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(uri)
    .then(() => {
        console.log("App connected to the database.");
        app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });