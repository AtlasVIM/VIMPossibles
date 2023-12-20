
const internals = {}
const externals = {}

internals.createSpyCard = function(spy) {
    return `<img width=200 height=250 src= "${spy.img}"/>`
}

internals.renderSpy = function(spy) {
    console.log(spy)
    internals.spyCard = internals.createSpyCard(spy);
    console.log(internals.spyCard);
    $('#app').append(internals.spyCard);

}

externals.render = function(spy) {
    if (spy) {
        internals.renderSpy(spy);
    }
}

export default externals;