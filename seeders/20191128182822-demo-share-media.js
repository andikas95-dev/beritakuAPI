'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('share_media', [
      {
        id: 1,
        media_social: 'Whatsapp'
      },
      {
        id: 2,
        media_social: 'Message'
      },
      {
        id: 3,
        media_social: 'Facebook'
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
