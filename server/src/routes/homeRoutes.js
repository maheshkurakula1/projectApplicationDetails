const loginController = require('../controllers/loginController');
module.exports = function(app,router){
  app.post('/inserProjectAndApplication', loginController.inserProjectAndApplication)
  app.get('/getProjectAndApplications', loginController.getProjectAndApplications)
}