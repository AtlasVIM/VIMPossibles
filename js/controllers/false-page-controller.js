import view from '../views/false-page-view.js'
import service from '../services/false-page-service.js'

const internals = {}
const externals = {}




externals.start = function() {
    service.getPokemon();
}

export default externals;