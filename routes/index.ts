import { Application } from "express";

module.exports = function (app: Application, version: string) {

    require('../middlewares/UserAuthMiddleware')(app, version);
    
    require('../routes/users')(app, version);
    require('../routes/roles')(app, version);
    require('../routes/access')(app, version);
}