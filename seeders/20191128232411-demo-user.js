'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
        id_role: 1
      },
      {
        id: 2,
        username: 'narator',
        password: 'narator',
        id_role: 2
      },
      {
        id: 3,
        username: 'buzzer',
        password: 'buzzer',
        id_role: 3
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
