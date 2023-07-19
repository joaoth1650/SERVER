'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
      },
      name: { 
        type: Sequelize.STRING,
        unique: true,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false,
      },
      password: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
