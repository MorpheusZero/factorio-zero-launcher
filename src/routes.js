// Setup all the routes that the application has access to for the internal API.
exports.RoutesConfig = (server, app) => {

    const appConfig = require('./assets/js/api/app-config.js').AppConfig(app),
        modProfile = require('./assets/js/api/mod-profile.js').ModProfile(app);


    // Config
    server.post('/config/create', appConfig.create);

    // Mod Profile
    server.post('/profile/create', modProfile.create)    

    return server;

};