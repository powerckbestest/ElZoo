

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [{
      peopleId: 1,
      dayId: 1,
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      peopleId: 2,
      dayId: 1,
      price: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      peopleId: 1,
      dayId: 2,
      price: 70,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      peopleId: 2,
      dayId: 2,
      price: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
      await queryInterface.bulkInsert('Tafiffs', arr, {});
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
