// import { getPokemon } from './generics/get-pokemon';

import { Pokemon } from "./decorators/pokemon-class";


// getPokemon(4)
//     .then( pokemon => console.log(pokemon.height))
//     .catch( err => console.log(err))
//     .finally( ()=> console.log('Fin'))

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemonToDB( 4);
// charmander.publicAPI = 'Andres'
console.log(charmander);