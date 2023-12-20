import view from '../views/main-view.js'
import service from '../services/main-service.js'

const internals = {}
const externals = {}




externals.start = function() {
    service.getSpies();
}

export default externals;