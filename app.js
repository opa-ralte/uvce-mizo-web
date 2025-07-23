const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
//👇put the connection to mongodb here

//👆

// custom modules👇

// custom modules👆

// This initializes an express application instance
const app = express();


app.set('view engine', 'ejs'); // We can embed js directly within our html file
app.use(express.urlencoded({urlencoded:true}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'image')));



app.get('/home', async (req, res) => {
    try {
        res.render('index', { title: 'Home'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${title}`);
    }
});

app.get('/about', async (req, res) => {
    try {
        res.render('about', { title: 'About'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${title}`);
    } 
});

app.get('/alumni', async (req, res) => {
    try {
        res.render('alumni', { title: 'Alumni'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${title}`);
    }
});

app.get('/civil', async (req, res) => {
    try {
        res.render('civil', { title: 'Civil'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${title}`);
    }
});

app.get('/mech', async (req, res) => {
    try {
        res.render('mech', { title: 'Mech'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${title}`);
    }
});

app.get('/cse', async (req, res) => {
    try {
        res.render('cse', { title: 'CSE'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${title}`);
    }
});




// Start the server 🌐server start karo🌐
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000/home`));

