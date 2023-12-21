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
    <button type="button" class="btn btn-warning" id="hire-button-${spy.id}"> 
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
    <p><strong> Description: </strong><div> ${spy.descriptionDTO}</div></p>
    <p><strong> Price: </strong><div> ${spy.priceDTO}</div></p>
    </span>
    </div>
    <form>
    <h2>REQUEST AN AGENT:</h2>
    <label for="target">Target:</label><br>
    <input type="text" id="target" name="target"><br>
    <label for="request-description">Request Description:</label><br>
    <textarea type="text" id="request-description" name="request-description"></textarea><br>
    <button type="button" id="request-agent-button-${spy.id}" class="btn btn-light">REQUEST</button>
    </form>
    <table class="table table-dark table-striped table-bordered border-light">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Target</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody id="table-row-missions">

    </tbody>
  </table>
    </div>
    `
}

internals.renderMissions = function(mission) {
    console.log(mission);
    internals.missionRow =`<tr>
    <th scope="row">${mission.id}</th>
    <td>${mission.target}</td>
    <td>${mission.description}</td>
  </tr>`;
  $('#table-row-missions').append(internals.missionRow);
}



internals.createMissions = function(spy) {
    console.log(spy)
    try{
        
        $('#table-row-missions').empty();
         internals.missions = fetch(`http://127.0.0.1:8080/vimPossibles/api/spy/${spy.id}/mission`)
        .then((response) => response.json())
        .then(response => response.forEach((mission) => internals.renderMissions(mission)))
        .catch((e) => console.log(e.stack));
} catch(e) {
    console.log(e.stack);
}
}


internals.createFilter = function(spy) {
    return `<li class="filter-parameter-name"><button type="button" class="btn btn-warning"> ${spy.name}</button></li>`
}

internals.bindRequestButton = function(spy) {
    const button = document.getElementById(`request-agent-button-${spy.id}`);
    button.addEventListener('click',function() {

        fetch(`http://127.0.0.1:8080/vimPossibles/api/spy/${spy.id}/mission` ,  {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
              target: $('#target').val(),
              description: $('#request-description').val()
            }) 
        }).catch((e)=> console.log(e.stack));
        internals.createMissions(spy);
    })
}

internals.bindHireButton = function(spy) {
    const button = document.getElementById(`hire-button-${spy.id}`);

    button.addEventListener('click',() => {
        return internals.renderCardDetails(spy)
});
}

internals.renderBackButton = function() {
    return `<button id="back-button" class="btn btn-light">GO BACK</button>`
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
        page.append(internals.createMissions(spy));
    return; 
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