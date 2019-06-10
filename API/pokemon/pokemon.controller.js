const mongoose = require('mongoose');
const PokemonSchema = require('./pokemon.model');

const createDataAccessObject = require('../config/accessObject');

PokemonSchema.statics = createDataAccessObject();
const Pokemon = mongoose.model('Pokemon', PokemonSchema);

const host = process.env.API_HOST;

exports.createPokemon = (req, res) => {
	const { name, order, id } = req.body;
	const pokemon = {
		id, name, url: `${host}/pokemon/${id}`, order,
	};

	Pokemon.create(pokemon, (error) => {
		if (error) return res.json({ error });
		return res.json({ message: 'Pokemon created successfully' });
	});
};

exports.getPokemons = (req, res) => {
	Pokemon.get({}, (error, pokemons) => {
		if (error) return res.json({ error });
		return res.json({ data: pokemons });
	});
};

exports.getPokemon = (req, res) => {
	const { name } = req.params;
	const id = parseInt(name, 10);
	const query = !!id && typeof id === 'number' ? { id } : { name: name.toLowerCase() };
	Pokemon.get(query, (error, pokemon) => {
		const pokemonExists = pokemon && !!pokemon.length;
		if (error) return res.json({ error });
		return pokemonExists ? res.json({ data: pokemon }) : res.sendStatus(404);
	});
};

exports.updatePokemon = (req, res) => {
	const { name, order } = req.body;
	const pokemon = { name, order };
	Pokemon.update({ _id: req.params.id }, pokemon, (error) => {
		if (error) return res.json({ error });
		return res.json({ message: 'Pokemon updated successfully' });
	});
};

exports.removePokemon = (req, res) => {
	Pokemon.delete({ _id: req.params.id }, (error) => {
		if (error) return res.json({ error });
		return res.json({ message: 'Pokemon deleted successfully' });
	});
};
