const config = require('../config');
const authController = require('../controllers/authController');
const rolesController = require('../controllers/rolesController');

module.exports = function (app) {
    // user roles addnew
    app.post('/v1/roles/addnew', function (req, res) {
        rolesController.addNew(req, res)
    });
    
    // user roles getall
    app.post('/v1/roles/getall', function (req, res) {
        rolesController.getAll(req, res)
    });
}