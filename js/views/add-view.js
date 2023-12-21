import mainService from '../services/main-service.js'
import mainController from '../controllers/main-controller.js'

const internals = {}
const externals = {}


internals.createForm = function() {
    $('#add-agent-button').remove();
    return `<form id="add-agent-form">
    <h2>Register an Agent:</h2>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"><br>  
    <label for="specialty">Specialty:</label><br>
    <input type="text" id="specialty" name="specialty"></input><br>
    <label for="description">Description:</label><br>
    <textarea type="text" id="description" name="description"></textarea><br>
    <button type="button" id="request-agent-button" class="btn">REGISTER</button>
    <button id="form-back-button">GO BACK</button>
    </form>`
}

internals.addAddButton = function() {
    return '<button id="add-agent-button">Add Agent</button>'
}

internals.bindRegister = function() {
    document.getElementById('request-agent-button').addEventListener('click', function() {

    $('#page-container').prepend(internals.addAddButton);
        mainController.bindAddButton();
        document.getElementById('add-agent-form').remove();
    })
}

internals.bindBackButton = function() {

    document.getElementById('form-back-button').addEventListener('click', function() {
        console.log('hole')
        $('#page-container').prepend(internals.addAddButton);
        mainController.bindAddButton();
        document.getElementById('add-agent-form').remove();

        return;
    })
}

externals.render = function() {
    const form = internals.createForm();
    $('#page-container').prepend(form);
    internals.bindBackButton();
    internals.bindRegister();
}

export default externals;