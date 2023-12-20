import service from '../services/main-service.js'

const internals = {}
const externals = {}

internals.createSpyIcon = function(spy) {
    return `<span class="spy-card"> 
    <div class= "spy-card-inner">
    <div class="spy-card-front">
    <img width=200 height=250 src= "${spy.img}"/>
    </div>
    <div class="spy-card-back">
    <h1> ${spy.name} </h1>
    <p> SPECIALTY: ${spy.specialty}</p>
    <p> Description: <div> ${spy.description}</div></p>
    <button type="button" class="btn btn-danger" id="hire-button-${spy.id}"> HIRE!
    </button>
    </div>
    </div>
    </span>`
}

internals.createSpyCardDetails = function(spy) {
    return `<div id="spy-card-detailed"> `
}

internals.createFilter = function(spy) {
    return `<li class="filter-parameter-name"><button type="button" class="btn"> ${spy.name}</button></li>`
}


internals.bindHireButton = function(spy) {
    console.log(spy.id)

    $(`#hire-button-1`).click(function() {
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
    $('#card-container').append(internals.renderBackButton());
    $('#back-button').click( function() {
        $('#card-container').empty();
        return service.getSpies();
    })
}



internals.renderCardDetails = function(spy) {
        $('#filter-bar').remove();
        const page =$('#card-container')
        page.empty();
        
        internals.bindBackButton();
        //render card

    return 
}


internals.renderSpy = function(spy) {
    internals.spyCard = internals.createSpyIcon(spy);
    internals.spyFilter = internals.createFilter(spy);
    internals.bindHireButton(spy);
    $('#card-container').append(internals.spyCard);
    $('#filter-parameter').append(internals.spyFilter);

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