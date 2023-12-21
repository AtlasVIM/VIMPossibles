import service from '../services/main-service.js'

const internals = {}
const externals = {}

internals.createSpyIcon = function(spy) {
    return `<span class="spy-card"> 
    <div class= "spy-card-inner">
    <div class="spy-card-front">
    <img width=200 height=250 src= "${spy.imgURLDTO}"/>
    </div>
    <div class="spy-card-back">
    <h1> ${spy.firstNameDTO} ${spy.lastNameDTO}</h1>
    <p> SPECIALTY: ${spy.specialityDTO}</p>
    <button type="button" class="btn btn-danger" id="hire-button-${spy.idDTO}"> 
    HIRE!
    </button>
    </div>
    </div>
    </span>`
}

internals.createSpyCardDetails = function(spy) {
    return `<div id="spy-card-details-container">
    <img id="spy-details-img" width=300 height=400 src="${spy.imgURLDTO}"/>
    <div id="spy-card-details">
    <span id="spy-details">
    <h1> ${spy.firstNameDTO} ${spy.lastNameDTO}</h1>
    <p><strong> Specialty: ${spy.specialityDTO}</strong></p>
    <p> Description: <div> ${spy.descriptionDTO}</div></p>
    <p> Price: <div> ${spy.priceDTO}</div></p>
    </span>
    </div>
    <form>
    <h2>REQUEST AN AGENT:</h2>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"><br>  
    <label for="request-description">Request Description:</label><br>
    <textarea type="text" id="request-description" name="request-description"></textarea><br>
    <button type="button" id="request-agent-button-${spy.id}" class="btn">REQUEST</button>
    </form>
    </div>
    `
}

internals.createFilter = function(spy) {
    return `<li class="filter-parameter-name"><button type="button" class="btn"> ${spy.name}</button></li>`
}

internals.bindRequestButton = function(spy) {
    const button = document.getElementById(`request-agent-button-${spy.idDTO}`);
    button.addEventListener('click',() => {
        return internals.renderCardDetails(spy);
    })
}

internals.bindHireButton = function(spy) {
    const button = document.getElementById(`hire-button-${spy.idDTO}`);

    button.addEventListener('click',() => {
        return internals.renderCardDetails(spy)
});
}

internals.renderBackButton = function() {
    return `<button id="back-button" class="btn">GO BACK</button>`
}

internals.renderFilterBar = function() {
    return `<div id="filter-bar">
    <h1>FILTER</h1>
    <div id="filter-parameter">
    </div>
    </div>`
}

internals.bindBackButton = function() {
    $('#spy-card-details-container').prepend(internals.renderBackButton());
    $('#back-button').on('click', function() {
        $('#spy-card-details-container').empty();
        return service.getSpies();
    })
}



internals.renderCardDetails = function(spy) {
        $('#filter-bar').remove();
        const page =$('#card-container')
        page.empty();
        
        page.append(internals.createSpyCardDetails(spy));
        internals.bindBackButton();
    internals.bindRequestButton(spy);
    return 
}


internals.renderSpy = function(spy) {
    internals.spyCard = internals.createSpyIcon(spy);
    internals.spyFilter = internals.createFilter(spy);
    $('#card-container').append(internals.spyCard);
    $('#filter-parameter').append(internals.spyFilter);

    internals.bindHireButton(spy);
}

externals.prependFilterBar = function() {
    $('#page-wrapper').prepend(internals.renderFilterBar);
}

externals.render = function(spy) {
    if (spy) {
        internals.renderSpy(spy);
    }
}


export default externals;