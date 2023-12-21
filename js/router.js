import mainController from './controllers/main-controller.js'

const internals = {};
const externals = {};



internals.routes = {
    main: {
        hash: '#main',
        controller: 'main-controller'
    }
}

internals.defaultRoute = 'main';
internals.currentHash = '';


internals.hashCheck = function() {
    if(window.location.hash === internals.currentHash) {
        return;
    }

    let routeName = Object.keys(internals.routes).find(function(name) {
        return window.location.hash === internals.routes[name].hash;
    })

    if (!routeName) {
        routeName = internals.defaultRoute;
        window.location.hash = internals.routes[internals.defaultRoute].hash;
    }

    internals.loadController(internals.routes[routeName].controller);

};


internals.loadController = function(controllerName) {
    internals.currentHash = window.location.hash;
    try {
        mainController.start();
    } catch (e) {
        console.log(e.stack);
        window.location.hash = internals.routes[internals.defaultRoute].hash;
    }

}

externals.init = function(){ 
    window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash;

    setInterval(internals.hashCheck, 150);
}

export default externals;