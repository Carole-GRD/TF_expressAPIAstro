// Configuration des variables d'environnement
require('dotenv').config();


// Import d'express
const express = require('express');


// Import des cors
const cors = require('cors');


// Import du middleware express-async-errors
require('express-async-errors');


// Création du serveur
const app = express();


// Utilisation des cors
app.use(cors());


// Import db 
const db = require('./models');


// Test de la connection à la DB
db.sequelize.authenticate()
    .then(() => console.log('Connection DB successful'))
    .catch((err) => console.log('Connection DB failed : ', err))


// Synchro db
// console.log('node_env : ', process.env.NODE_ENV);  // -> developement
if(process.env.NODE_ENV === 'development') {
    // db.sequelize.sync({ force : true });
    // db.sequelize.sync({ alter : { drop : false }});
    // db.User.sync({ alter : { drop : false } });
    // db.User.sync({ force : true });
}


// Middleware app-lvl
app.use(express.json());
app.use(express.static('public'));


// Router
const router = require('./routes');
app.use('/api', router);


// Ecoute server
app.listen(process.env.PORT, () => {
    console.log(`Server API started on port : ${process.env.PORT}`);
});



