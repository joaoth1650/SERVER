import { INTEGER, STRING } from 'sequelize'
import sequelize from '../repositories/db.js' 

const Games = sequelize.define('Games', {
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
  sku: { 
    type: INTEGER,
    allowNull:false,
  },
})
 export default Games
