const businessController = require('../controllers/businessController');
const businessTypeController = require('../controllers/businessTypeController');

module.exports = function (app) {
    // user roles addnew
    app.post('/v1/business/addnew', function (req, res) {
        businessController.addNew(req, res)
    });
    
    // user roles getall
    app.post('/v1/business/getall', function (req, res) {
        businessController.getAll(req, res)
    });
}