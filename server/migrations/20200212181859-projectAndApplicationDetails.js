'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projectAndApplications', {
      id: { type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      application_id: { type: Sequelize.INTEGER },
      application_name: { type: Sequelize.STRING },
      project_id: { type: Sequelize.INTEGER },
      project_name: { type: Sequelize.STRING },
      build_id: { type: Sequelize.INTEGER },
      created_at: { type: Sequelize.DATE, defaultValue: new Date() },
      updated_at: { type: Sequelize.DATE, defaultValue: new Date() }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projectAndApplications')
  }
};
