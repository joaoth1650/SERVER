import { INTEGER, STRING } from 'sequelize'
import db from '../repositories/db.js' 
import Games from './games.models.js'
import Users from './users.models.js'
import Sequelize from 'sequelize'
import Games from './games.models.js'
import Users from './users.models.js'

const Sale = db.define(
  "sale", {
    id: { 
      type: Sequelize.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    usersId: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { 
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    total: { 
      type: Sequelize.INTEGER,
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
  }, {
    underscored: true
  })

  Sale.belongsTo(Users, {
    foreignKey: 'userId',
    as: 'user',
  })

 export default Sale
