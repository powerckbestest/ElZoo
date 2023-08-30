

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [{
      name: 'Выходной',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Будний',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
      await queryInterface.bulkInsert('Days', arr, {});
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
