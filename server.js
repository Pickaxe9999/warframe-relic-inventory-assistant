const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

//define application and port
const app = express();
const PORT = process.env.PORT || 3001;

//middleware for express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use(routes);


//turn on the connection to the db server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})