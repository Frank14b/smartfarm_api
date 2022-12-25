const config = require('../config');
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

    // user get all users
    app.post('/v1/users/getall', function (req, res) {
        usersController.getAll(req, res)
    });
    
    // user get user by id
    app.post('/v1/users/getbyid', function (req, res) {
        usersController.getById(req, res)
    });
}