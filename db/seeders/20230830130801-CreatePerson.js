'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [{
      name: 'Взрослый',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Детский',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
      await queryInterface.bulkInsert('People', arr, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
