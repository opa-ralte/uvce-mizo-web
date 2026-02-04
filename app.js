require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();

// Optional: Connect to MongoDB if MONGO_URI is set in .env
const mongoUri = process.env.MONGO_URI;
if (mongoUri) {
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });
}

// Security and performance middleware
app.use(helmet());
app.use(compression());

// Basic rate-limiter (tune to your needs)
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120, // limit each IP to 120 requests per windowMs
});
app.use(apiLimiter);

// Logging: dev verbose, production combined
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Express setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets with caching; do not aggressively cache HTML
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // always revalidate HTML
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Routes (all synchronous handlers unless awaiting something)
app.get('/home', (req, res) => {
  const pageTitle = 'Home';
  try {
    res.render('home', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /home:', error);
    res.status(500).send('Something went wrong loading the Home page.');
  }
});

app.get('/about', (req, res) => {
  const pageTitle = 'About';
  try {
    res.render('about', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /about:', error);
    res.status(500).send('Something went wrong loading the About page.');
  }
});

app.get('/alumni', (req, res) => {
  const pageTitle = 'Alumni';
  try {
    res.render('alumni', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /alumni:', error);
    res.status(500).send('Something went wrong loading the Alumni page.');
  }
});

app.get('/register', (req, res) => {
  const pageTitle = 'Register';
  try {
    res.render('register', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /register:', error);
    res.status(500).send('Something went wrong loading the Register page.');
  }
});

app.get('/civil', (req, res) => {
  const pageTitle = 'Civil';
  try {
    res.render('civil', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /civil:', error);
    res.status(500).send('Something went wrong loading the Civil page.');
  }
});

app.get('/mech', (req, res) => {
  const pageTitle = 'Mech';
  try {
    res.render('mech', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /mech:', error);
    res.status(500).send('Something went wrong loading the Mech page.');
  }
});

app.get('/cse', (req, res) => {
  const pageTitle = 'CSE';
  try {
    res.render('cse', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /cse:', error);
    res.status(500).send('Something went wrong loading the CSE page.');
  }
});

app.get('/contacts', (req, res) => {
  const pageTitle = 'Contacts';
  try {
    res.render('contacts', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /contacts:', error);
    res.status(500).send('Something went wrong loading the Contacts page.');
  }
});

app.get('/extras', (req, res) => {
  const pageTitle = 'Extras';
  try {
    res.render('extras', { title: pageTitle });
  } catch (error) {
    console.error('Error rendering /extras:', error);
    res.status(500).send('Something went wrong loading the Extras page.');
  }
});

// Health check endpoint (useful for uptime monitors)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: Date.now() });
});

// Generic 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal server error');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App available on http://localhost:${port}/home`);
});
