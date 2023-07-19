import { INTEGER, STRING, DATE } from 'sequelize'
import db from '../repositories/db.js' 

const Games = db.define(
  "games", {
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
    createdAt: {
      allowNull: false,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DATE,
    },
  }, 
); 

 export default Games
