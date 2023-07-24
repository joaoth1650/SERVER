import { INTEGER, STRING, DATE } from 'sequelize'
import db from '../repositories/db.js' 
import Games from './games.models.js'
import Users from './users.models.js'


const Favorites = db.define(
  "favorites", {
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
    usersId: { 
      type: INTEGER,
      allowNull: false,
      references: { 
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },{
    underscored: true
  }
  )

  Favorites.belongsTo(Games, {
    foreignKey: 'gamesId',
  })
  Favorites.belongsTo(Users, {
    foreignKey: 'usersId',
  })
 

 export default Favorites
