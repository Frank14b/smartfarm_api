const userAccessController = require('../controllers/userAccessController');
const accessController = require('../controllers/accessController');

module.exports = function (app: any) {
    // user access addnew
    app.post('/v1/access/add', function (req: any, res: any) {
        accessController.addNew(req, res)
    });

    // user access getall
    app.get('/v1/access', function (req: any, res: any) {
        accessController.getAll(req, res)
    });

    // user role access get
    app.get('/v1/userAccess', function (req: any, res: any) {
        userAccessController.getAll(req, res)
    });

    // user role access add
    app.post('/v1/userAccess/add', function (req: any, res: any) {
        userAccessController.addNew(req, res)
    });
}