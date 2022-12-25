module.exports = function (app) {

    require('./middlewares/userAuth')(app);
    
    require('./routes/users')(app);
    require('./routes/roles')(app);
    require('./routes/access')(app);
}