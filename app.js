const express = require('express');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');
//👇put the connection to mongodb here

//👆

// custom modules👇

// custom modules👆

// This initializes an express application instance
const app = express();


app.set('view engine', 'ejs'); // We can embed js directly within our html file
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(express.json());

// Enable gzip compression for responses
app.use(compression());

// Serve static files with caching headers (1 day)
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    etag: true
}));
app.use('/image', express.static(path.join(__dirname, 'image'), {
    maxAge: '1d',
    etag: true
}));



app.get('/home', async (req, res) => {
    try {
        res.render('home', { title: 'Home'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/about', async (req, res) => {
    try {
        res.render('about', { title: 'About'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    } 
});

app.get('/alumni', async (req, res) => {
    try {
        res.render('alumni', { title: 'Alumni'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/register', async (req, res) => {
    try {
        res.render('register', { title: 'Register'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/civil', async (req, res) => {
    try {
        res.render('civil', { title: 'Civil'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/mech', async (req, res) => {
    try {
        res.render('mech', { title: 'Mech'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/cse', async (req, res) => {
    try {
        res.render('cse', { title: 'CSE'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/contacts', async (req, res) => {
    try {
        res.render('contacts', { title: 'Contacts'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});

app.get('/extras', async (req, res) => {
    try {
        res.render('extras', { title: 'Extras'});
    } catch (error) {
        res.status(500).send(`Something went wrong loading ${req.path}`);
    }
});




// Start the server 🌐server start karo🌐
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000/home`));

