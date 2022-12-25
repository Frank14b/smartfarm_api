const config = require('../config');
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

module.exports = function (app) {
    // user login
    app.post('/v1/users/login', function (req, res) {
        usersController.login(req, res)
    });
    
    // user register
    app.post('/v1/users/register', function (req, res) {
        usersController.register(req, res)
    });
}