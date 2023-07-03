'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games', { 
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
      cost: { 
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      category: { 
        type: Sequelize.STRING,
        allowNull:false,
      }
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};
