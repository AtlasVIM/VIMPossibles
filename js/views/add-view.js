import mainService from '../services/main-service.js'

const internals = {}
const externals = {}


internals.createForm = function() {
    document.getElementById('page-wrapper').style.display = "none";
    document.getElementById('add-agent-button').style.display ="none";
    return `<form id="add-agent-form">
    <h2>Register an Agent:</h2>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"><br>  
    <label for="specialty">Specialty:</label><br>
    <input type="text" id="specialty" name="specialty"></input><br>
    <label for="Description">Description:</label><br>
    <textarea type="text" id="description" name="description"></textarea><br>
    <button type="button" id="request-agent-button" class="btn">REQUEST</button>
    </form>
    <button id="form-back-button">GO BACK</button>`
}

internals.addAddButton = function() {
    
}

internals.bindBackButton = function() {

    $('#form-back-button').on('click', function() {
        console.log('hole')
        document.getElementById('page-wrapper').style.display = "block";
        return mainService.getSpies();
    })
}

externals.render = function() {
    const form = internals.createForm();
    $('#page-container').append(form);
}

export default externals;