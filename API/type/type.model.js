const mongoose = require('mongoose');

const { Schema } = mongoose;

const PokemonSchema = new Schema({
	name: {
		type: String,
	},
	url: {
		type: String,
	},
});

const TypeSchema = new Schema({
	id: {
		type: Number,
		unique: true,
		required: true,
	},
	name: {
		type: String,
		unique: true,
		required: true,
	},
	url: {
		type: String,
		unique: true,
	},
	pokemons: {
		type: [PokemonSchema],
		default: null,
	},
}, {
	timestamps: true,
});

module.exports = TypeSchema;
