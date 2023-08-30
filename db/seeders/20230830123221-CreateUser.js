const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = '1234'
    const hashPassword = await bcrypt.hash(password, 10)
    const arr = [{
      login: 'admin@zoo.com',
      hashpass: hashPassword,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
      await queryInterface.bulkInsert('Users', arr, {});
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
