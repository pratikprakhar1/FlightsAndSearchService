'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name : 'Kempegoda International Airport',
        cityId : 18,
        createdAt : new Date() ,
        updatedAt : new Date()
      }
      ,
      {
        name : 'Mysuru Airport',
        cityId : 18,
        createdAt : new Date() ,
        updatedAt : new Date()
      },
      {
        name : 'Mengaluru International Airport',
        cityId : 18,
        createdAt : new Date() ,
        updatedAt : new Date()
      },
      {
        name : 'Indra Gandhi International Airport',
        cityId : 1,
        createdAt : new Date() ,
        updatedAt : new Date()
      },
      {
        name : 'BijuPatnaik International Airport',
        cityId : 11,
        createdAt : new Date() ,
        updatedAt : new Date()
      }
  
  
  
      ], {});

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
