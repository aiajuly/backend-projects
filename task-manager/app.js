const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const dbConnection = require('./db/connect');
const taskRoutes = require('./routes/tasks');


// basic init
const app = express();
dbConnection();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use('/tasks', taskRoutes)






const port = process.env.port || 3000;
app.listen(port, console.log(`Listening on ${port}`));