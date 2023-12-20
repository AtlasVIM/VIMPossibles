
const internals = {}
const externals = {}

internals.createSpyCard = function(spy) {
    return `<span class="spy-card"> 
    <div class= "spy-card-inner">
    <div class="spy-card-front">
    <img width=200 height=250 src= "${spy.img}"/>
    </div>
    <div class="spy-card-back">
    <h1> ${spy.name} </h1>
    <p> SPECIALTY: ${spy.specialty}</p>
    <p> Description: <div> ${spy.description}</div></p>
    <button type="button" class="btn btn-danger hire-button"> HIRE!
    </button>
    </div>
    </div>
    </span>`
}

internals.createFilter = function(spy) {
    return `<li class="filter-parameter-name">${spy.name}</li>`
}

internals.renderSpy = function(spy) {
    console.log(spy)
    internals.spyCard = internals.createSpyCard(spy);
    internals.spyFilter = internals.createFilter(spy);
    console.log(internals.spyCard);
    $('#card-container').append(internals.spyCard);
    $('#filter-parameter').append(internals.spyFilter);

}

externals.render = function(spy) {
    if (spy) {
        internals.renderSpy(spy);
    }
}

export default externals;