'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [{
      rolename: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
      await queryInterface.bulkInsert('Roles', arr, {});
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
