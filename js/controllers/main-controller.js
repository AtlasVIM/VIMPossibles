import view from '../views/main-view.js'
import service from '../services/main-service.js'
import addService from '../services/add-agent-service.js'

const internals = {}
const externals = {}


internals.bindAddButton = function() {
    const button = document.getElementById('add-agent-button')
    button.addEventListener('click', () => {
        addService.add();
    })
}

externals.start = function() {
    internals.bindAddButton();
    service.getSpies();
}

export default externals;