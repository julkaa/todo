module.exports = function(app) {

    const usercontroller = require('../controllers/usercontroller');
    const listController = require('../controllers/listcontroller');
    const autorizated = require('../middleware/validateToken')
    // app.get('/', usercontroller.home);
    app.post('/signup', usercontroller.signup);
    app.post('/login', usercontroller.signin);
    app.post('/add-list', autorizated.validateToken, listController.createList);
    app.get('/get-lists/:id', listController.getLists);
    app.get('/get-list/:id', listController.getLists);
    app.delete('/delete-list/:id', autorizated.validateToken, listController.deleteList);
    app.post('/add-task', autorizated.validateToken, listController.createTask);
    app.delete('/delete-task/:id', autorizated.validateToken, listController.deleteTask);
	
}