const businessController = require('../controllers/businessController');
const businessTypeController = require('../controllers/businessTypeController');

module.exports = function (app: any) {
    // user roles addnew
    app.post('/v1/business/addnew', function (req: any, res: any) {
        businessController.addNew(req, res)
    });
    
    // user roles getall
    app.post('/v1/business/getall', function (req: any, res: any) {
        businessController.getAll(req, res)
    });
}