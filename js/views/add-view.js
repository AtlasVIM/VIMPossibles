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
    <label for="img-url">Image URL:</label><br>
    <input type="text" id="img-url" name="img-url"></input><br>
    <label for="price">Price:</label><br>
    <input type="text" id="price" name="price"></input><br>
    <label for="description">Description:</label><br>
    <textarea type="text" id="description" name="description"></textarea><br>
    <button type="button" id="request-agent-button" class="btn btn-warning">REGISTER</button>
    <button type="button" class="btn btn-light" id="form-back-button">GO BACK</button>
    </form>`
}

internals.addAddButton = function() {
    return '<button type="button" class="btn btn-warning" id="add-agent-button">Add Agent</button>'
}

internals.bindRegister = function() {
    document.getElementById('request-agent-button').addEventListener('click', function() {
    fetch('http://127.0.0.1:8080/vimPossibles/api/spy/' ,  {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          firstNameDTO: $('#fname').val(),
          lastNameDTO: $('#lname').val(),
          specialityDTO: $('#specialty').val(),
          imgURLDTO:  $('#img-url').val()|| '/img/anon.jpeg',
          descriptionDTO: $('#description').val(),
          priceDTO: $('#price').val()
        }) 
    }).then((response) => console.log(response)).catch((e)=> console.log(e.stack));
    $('#page-container').prepend(internals.addAddButton);
    mainController.bindAddButton();
    document.getElementById('add-agent-form').remove();  
    mainService.getSpies();
       
    })
  
}

internals.bindBackButton = function() {

    document.getElementById('form-back-button').addEventListener('click', function() {
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