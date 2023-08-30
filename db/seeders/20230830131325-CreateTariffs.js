'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [{
      peopleId: 1,
      dayId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      peopleId: 2,
      dayId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      peopleId: 1,
      dayId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      peopleId: 2,
      dayId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
      await queryInterface.bulkInsert('Tariffs', arr, {});
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
