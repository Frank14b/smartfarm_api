const config = require('../config');
const userAccessController = require('../controllers/userAccessController');
const accessController = require('../controllers/accessController');
const modulesController = require('../controllers/modulesController');

module.exports = function (app) {
    // user access addnew
    app.post('/v1/access/addnew', function (req, res) {
        accessController.addNew(req, res)
    });

    // user access getall
    app.post('/v1/access/getall', function (req, res) {
        accessController.getAll(req, res)
    });

    // user role access get
    app.post('/v1/access/getaccess', function (req, res) {
        userAccessController.getAll(req, res)
    });

    // user role access add
    app.post('/v1/access/addaccess', function (req, res) {
        userAccessController.addNew(req, res)
    });

    // add app module
    app.post('/v1/access/addmodule', function (req, res) {
        modulesController.addNew(req, res)
    });

    // get all modules
    app.post('/v1/access/getmodules', function (req, res) {
        modulesController.getAll(req, res)
    });
}