'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', { 
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('favorites');
  }
};