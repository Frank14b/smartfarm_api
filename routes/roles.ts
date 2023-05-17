const rolesController = require('../controllers/rolesController');

module.exports = function (app: any) {
    // user roles addnew
    app.post('/v1/roles/addnew', function (req: any, res: any) {
        rolesController.addNew(req, res)
    });
    
    // user roles getall
    app.post('/v1/roles/getall', function (req: any, res: any) {
        rolesController.getAll(req, res)
    });
}