import { INTEGER, STRING, DATE } from 'sequelize'
import db from '../repositories/db.js' 
import Games from './games.models.js';
import Sale from './sale.models.js';
const GamesSale = db.define(
  "games_sale", {
    id: { 
      type: INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    gamesId: { 
      type: INTEGER,
      allowNull: false,
      references: { 
        model: 'games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    saleId: { 
      type: INTEGER,
      allowNull: false,
      references: { 
        model: 'sale',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    total: { 
      type: INTEGER,
      allowNull:true,
    },
    quantity: { 
      type: INTEGER,
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DATE,
    },
  }, {
    underscored: true
  }); 
  
Games.belongsToMany(Sale, {
  foreignKey: 'gamesId',
  otherKey: 'saleId',
  as: 'sales',
  through: GamesSale
})
Sale.belongsToMany(Games, {
  foreignKey: 'saleId',
  otherKey: 'gamesId',
  as: 'games',
  through: GamesSale
})

 export default GamesSale
