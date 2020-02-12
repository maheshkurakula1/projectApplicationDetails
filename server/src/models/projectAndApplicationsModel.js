const Sequelize = require('sequelize');
var database = require("./../../dbConnection").sequelize

exports.projectAndApplications = database.define('projectAndApplications', {
	application_id: { type: Sequelize.INTEGER },
    application_name: { type: Sequelize.STRING },
    project_id: { type: Sequelize.INTEGER },
    project_name: { type: Sequelize.STRING },
    build_id: { type: Sequelize.INTEGER },

  },{
	underscored: true,
	tableName: 'projectAndApplications'
  });