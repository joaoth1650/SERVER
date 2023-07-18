import { INTEGER, STRING } from 'sequelize'
import db from '../repositories/db.js' 
import Sequelize from 'sequelize'

const Favorites = db.define(
  "Favorites", {
    id: { 
      type: INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: STRING,
      allowNull:false,
    },
    cost: { 
      type: INTEGER,
      allowNull:false,
    },
    category: { 
      type: STRING,
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    }
  })
 export default Favorites
