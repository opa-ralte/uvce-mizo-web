require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// This initializes an express application instance
const app = express();

app.set('view engine', 'ejs'); // We can embed js directly within our html file
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'image')));



// Root route redirect
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Route configuration array
const routes = [
  { path: '/home', view: 'home', title: 'Home' },
  { path: '/about', view: 'about', title: 'About' },
  { path: '/alumni', view: 'alumni', title: 'Alumni' },
  { path: '/civil', view: 'civil', title: 'Civil' },
  { path: '/mech', view: 'mech', title: 'Mech' },
  { path: '/cse', view: 'cse', title: 'CSE' },
  { path: '/contacts', view: 'contacts', title: 'Contacts' },
  { path: '/extras', view: 'extras', title: 'Extras' },
  { path: '/danger', view: 'danger', title: 'Danger' }
];

routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.render(route.view, { title: route.title });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Error', 
    message: 'Something went wrong!' 
  });
});

// Start the server 🌐server start karo🌐
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000/home`));

