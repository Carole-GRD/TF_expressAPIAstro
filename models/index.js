// Import du module sequelize à l'aide de la fonction " require ".
// La variable Sequelize est ensuite extraite de l'objet retourné par la fonction " require ", 
// grâce à la notation de décomposition " const { Sequelize } "
const { Sequelize } = require('sequelize');


// Extraction des valeurs des variables d'environnement à partir de l'objet process.env.
const { DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;


// Création d'une nouvelle instance de la classe Sequelize qui va permettre de se connecter à une base de données SQL Server.
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mssql',
    logging: false 
    // logging: console.log 
})


// Création de l'objet db
const db = {};
// Cet objet db va contenir une propriété sequelize qui est égale à l'instance de la classe Sequelize précédemment créée avec la variable sequelize.
db.sequelize = sequelize;


// Import et définition des modèles Sequelize pour les tables de la base de données SQL Server.
// La fonction require est utilisée pour importer les fichiers (user.model.js par exemple) qui doivent retourner une fonction qui prend en paramètre l'instance de la classe Sequelize créée précédemment (sequelize). Ces fonctions doivent créer et renvoyer un modèle Sequelize pour les tables (pour la table User par exemple).
db.Article = require('./article.model')(sequelize);
db.Category = require('./category.model')(sequelize);
db.Mark = require('./mark.model')(sequelize);
db.Order = require('./order.model')(sequelize);
db.Article_Order = require('./article_order.model')(sequelize);
db.Store = require('./store.model')(sequelize);
db.MM_Article_Store = require('./mm_article_store.model')(sequelize);
db.User = require('./user.model')(sequelize);
db.Photo = require('./photo.model')(sequelize);


// Définition des relations
// Article <-> Mark (One to Many)
// TODO : ajout d'une option -> un article doit obligatoirement être asocciée à une marque
db.Mark.hasMany(db.Article);
db.Article.belongsTo(db.Mark);
// User <-> Order (One to Many)
db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);
// Article <-> Photo (One to Many)
// ajout d'une option -> une photo doit obligatoirement être asocciée à un article
db.Article.hasMany(db.Photo, {
    foreignKey: {     
      allowNull: false    
    }
  });
db.Photo.belongsTo(db.Article);
// Article <-> Category (Many to Many)
db.Article.belongsToMany(db.Category, { through : 'MM_Article_Category' });
db.Category.belongsToMany(db.Article, { through : 'MM_Article_Category' });
// Article <-> User (Many to Many)
db.Article.belongsToMany(db.User, { through : 'MM_Article_User' });
db.User.belongsToMany(db.Article, { through : 'MM_Article_User' });
// Article <-> Order (Many to Many avec attributs)
db.Article.hasMany(db.Article_Order);
db.Article_Order.belongsTo(db.Article);
db.Order.hasMany(db.Article_Order);
db.Article_Order.belongsTo(db.Order);

// db.Article.hasMany(db.Article_Order);
// db.Article_Order.hasOne(db.Article);
// db.Order.hasMany(db.Article_Order);
// db.Article_Order.hasOne(db.Order);

// db.Article.belongsToMany(db.Order, { through : db.Article_Order });
// db.Order.belongsToMany(db.Article, { through : db.Article_Order }, );

// Article <-> Store (Many to Many avec attributs)
db.Article.belongsToMany(db.Store, { through : db.MM_Article_Store });
db.Store.belongsToMany(db.Article, { through : db.MM_Article_Store }, );


// export du module db
module.exports = db;
