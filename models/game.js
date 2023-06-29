const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
 'joao',
 'root',
 'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const Game = sequelize.define("games", {
   name: {
     type: 
     DataTypes.STRING,
     allowNull: true
   },
   cost: {
    type: 
     DataTypes.INTEGER, 
     allowNull: true
   },
   category: {
     type: 
     DataTypes.STRING,
     allowNull: true
   }
});

sequelize.sync().then(() => {
   console.log('Game table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});