const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//MiddleWares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res)=> {
    res.send('We are on home');
});


//Connect to db
mongoose.connect(
process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=> console.log('Connected to DB!'))
//How do we start listening to the server
app.listen(3000);