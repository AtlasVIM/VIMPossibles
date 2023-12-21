import view from '../views/main-view.js'
import service from '../services/main-service.js'
import addService from '../services/add-agent-service.js'

const internals = {}
const externals = {}


externals.bindAddButton = function() {
    const button = document.getElementById('add-agent-button')
    button.addEventListener('click', () => {
        addService.add();
    })
}

externals.start = function() {
    externals.bindAddButton();
    service.getSpies();
}

export default externals;