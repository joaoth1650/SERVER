import { INTEGER, STRING, DATE } from 'sequelize'
import db from '../repositories/db.js' 
import Games from './games.models.js';
import Category from './category.models.js';

const GamesCategory = db.define(
  "games_category", {
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
    categoryId: { 
      type: INTEGER,
      allowNull: false,
      references: { 
        model: 'category',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    underscored: true
  }
); 
Games.belongsToMany(Category, {
  foreignKey: 'gamesId',
  otherKey: 'categoryId',
  as: 'categories',
  through: GamesCategory
})
Category.belongsToMany(Games, {
  foreignKey: 'categoryId',
  otherKey: 'gamesId',
  as: 'games',
  through: GamesCategory
})

 export default GamesCategory
