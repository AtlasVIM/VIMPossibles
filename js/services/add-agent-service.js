import view from '../views/add-view.js'

const internals = {}
const externals = {}

externals.add = function() {
    view.render();
}

export default externals;