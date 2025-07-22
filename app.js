const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
// custom modules

const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (request, response) => {

    fs.readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order');
        }

        response.send(html);

    });

});


// Start the server
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));

