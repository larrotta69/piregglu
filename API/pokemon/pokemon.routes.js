const Pokemon = require('./pokemon.controller');

module.exports = (router) => {
	router.post('/pokemon/create', Pokemon.createPokemon);
	router.get('/pokemons', Pokemon.getPokemons);
	router.get('/pokemon/:name', Pokemon.getPokemon);
	router.put('/pokemon/update/:id', Pokemon.updatePokemon);
	router.delete('/pokemon/remove/:id', Pokemon.removePokemon);
};
