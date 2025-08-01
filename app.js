
const express = require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Anime = require('./models/anime'); // adjust the path as needed
const Register = require('./models/register'); // adjust the path as needed
const app=express();

//A hnuaia mite hi database mongodb ami nena connect na ani
const dbURI='mongodb+srv://fakaralte100:1234567890@server-zirna.nuiglq2.mongodb.net/?retryWrites=true&w=majority&appName=server-zirna';
mongoose.connect(dbURI)
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err));


app.set('view engine','ejs');  //ejs vel install na
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'image')));






app.get('/home', async (req, res) => {
  try {
    res.render('home', { title: 'Home Page' });
  } catch (err) {
    res.status(500).send('Something went wrong loading home page.');
  }
});

app.get('/department', async (req, res) => {
  try {
    const animeList = await Anime.find();

    res.render('department', {animeList, title: 'Department Page' });
  } catch (err) {
    res.status(500).send('Something went wrong loading about page.');
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


app.get('/contact', async (req, res) => {
  try {
    res.render('form1', { title: 'Contact Page' });
  } catch (err) {
    res.status(500).send('Something went wrong loading contact page.');
  }
});

app.get('/alumni', async (req, res) => {
  try {
    res.render('alumni', { title: ' Alumni Page' });
  } catch (err) {
    res.status(500).send('Something went wrong loading contact page.');
  }
});
app.get('/question', async (req, res) => {
  try {
    res.render('question', { title: '  Question Page' });
  } catch (err) {
    res.status(500).send('Something went wrong loading contact page.');
  }
});

app.get('/register', async (req, res) => {
  try {
   const registerList = await Register.find();
    registerList.sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year; // 
      } else {
        return b.branch.localeCompare(a.branch); // 
      }
    });
   
    res.render('register', { registerList,title: 'in luhna' });
  } catch (err) {
    res.status(500).send('Something went wrong loading contact page.');
  }
});



app.post('/anime-post', async (req, res) => {
  try {
    const anime = new Anime(req.body);
    await anime.save();
    res.redirect('/home'); // or redirect to a list page
  } catch (err) {
    res.status(500).send('Something went wrong loading contact page.');
  }
});

app.post('/delete-anime', async (req, res) => {
  const { id } = req.body;
  try {
    await Anime.findByIdAndDelete(id);
    res.redirect('/about'); // or wherever your list page is
  } catch (err) {
    res.status(500).send("Delete failed");
  }
});


app.post('/register-post', async (req, res) => {
  try {
    console.log('Form Data:', req.body); 
    const register = new Register(req.body);
    await register.save();
    res.redirect('/register'); // or redirect to a list page
  } catch (err) {
    res.status(500).send('Something went wrong loading contact page.');
  }
});


// Start server
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});