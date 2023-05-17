const modulesController = require('../controllers/modulesController');

module.exports = function (app: any) {
    // add app module
    app.post('/v1/modules/add', function (req: any, res: any) {
        modulesController.addNew(req, res)
    });

    // get all modules
    app.get('/v1/modules', function (req: any, res: any) {
        modulesController.getAll(req, res)
    });
}