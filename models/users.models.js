import { INTEGER, STRING, DATE } from 'sequelize'
import db from '../repositories/db.js' 

const Users = db.define(
  "users", {
    id: { 
      type:INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    name: { 
      type: STRING,
      unique: true,
      allowNull:false,
    },
    email: {
      type: STRING,
      unique: true,
      allowNull:false,
    },
    password: { 
      type: STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DATE,
    },
  }
)

 export default Users
