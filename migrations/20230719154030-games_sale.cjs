'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games_sale', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
      },
      games_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'games',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sale_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'sale',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      total: { 
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      quantity: { 
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
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('games_sale');
  }
};
