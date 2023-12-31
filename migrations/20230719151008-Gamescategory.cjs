'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games_category', { 
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
      category_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'category',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('games_category');
  }
};
