import { INTEGER, STRING } from 'sequelize'
import db from '../repositories/db.js' 

const Users = db.define(
  "users", {
  id: { 
    type: INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true
  },
  username: { 
    type: STRING,
    allowNull:false,
  },
  password: { 
    type: STRING,
    allowNull:false,
  },
}, {
    
    timestamps: true, 
  
})
 export default Users
