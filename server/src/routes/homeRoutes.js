const loginController = require('../controllers/loginController');
module.exports = function(app,router){
  // app.use('/home', router);
  app.get('/', loginController.loginPage);
  app.get('/getpaymentTypes', loginController.paymentTypes)
  app.get('/getoutletSale', loginController.outletSale)
  app.post('/sampleRoute', loginController.sampleInsert)
//   app.post('/',loginController.verifyLogin);
//   app.all('/settings', permissions.authenticate("show_printers"),loginController.verifyLogin);
//   app.get('/logout', loginController.logOut);
//   app.get('/forgetPassword', loginController.forgotPassword);
//   app.post('/resetPassword', loginController.resetPassword);
//   app.get('/resetPassword/:token', loginController.newPassword);
//   app.post('/newPassword', loginController.changePassword);
}