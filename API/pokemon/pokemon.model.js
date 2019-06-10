const mongoose = require('mongoose');

const { Schema } = mongoose;

const PokemonSchema = new Schema({
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
		required: false,
	},
	order: {
		type: Number,
		unique: true,
		required: false,
	},
}, {
	timestamps: true,
});


module.exports = PokemonSchema;
