
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
    <p> ${spy.specialty}</p>
    <p> ${spy.description}</p>
    </div>
    </div>
    </span>`
}

internals.renderSpy = function(spy) {
    console.log(spy)
    internals.spyCard = internals.createSpyCard(spy);
    console.log(internals.spyCard);
    $('#card-container').append(internals.spyCard);

}

externals.render = function(spy) {
    if (spy) {
        internals.renderSpy(spy);
    }
}

export default externals;