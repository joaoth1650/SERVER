'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.addColumn('games', 'category', { type: Sequelize.STRING });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('games', 'category', { type: Sequelize.STRING });
  }
};
