import { INTEGER, STRING, DATE } from 'sequelize'
import db from '../repositories/db.js' 
import Favorites from './favorites.models.js';

const Category = db.define(
  "category", {
    id: { 
      type: Sequelize.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: Sequelize.STRING,
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }
); 


 export default Category
