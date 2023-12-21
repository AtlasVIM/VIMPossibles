    

    const internals = {};
    const externals = {};
    

    internals.createPokéCard = function(poke) {
            
        return '<div class="gallery">' +
        '<img src="' + poke.sprites + '" width="300" height="400" ></img>' +
        '<div class="desc">' + poke.name + '</div>' +
        '</div>';
    };
        
    

    internals.renderPoke= function(poke) {
        internals.pokeCard = internals.createPokéCard(poke);
        $('#app').append(internals.pokeCard);    
    }

    externals.render = function(poke){
        if(poke){
            internals.renderPoke(poke);
        }
    }

    export default externals;

