import view from '../views/false-page-view.js'

import poke from '../data.js'

const internals = {};
const externals = {};

internals.poke = poke;

externals.getPokemon = function () {
 internals.poke.forEach(poke => view.render(poke));
}
export default externals;