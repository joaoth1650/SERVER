import { INTEGER, STRING } from 'sequelize'
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
  category: { 
    type: STRING,
    allowNull:false,
  },
}, {
    
    timestamps: true, 
  
})
 export default Games
