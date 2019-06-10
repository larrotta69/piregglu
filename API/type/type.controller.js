const mongoose = require('mongoose');
const TypeSchema = require('./type.model');

const createDataAccessObject = require('../config/accessObject');

TypeSchema.statics = createDataAccessObject();
const Type = mongoose.model('Type', TypeSchema);

// const host = process.env.API_HOST;

exports.getTypes = (req, res) => {
	Type.get({}, (error, types) => {
		if (error) return res.json({ error });
		return res.json({ data: types });
	});
};
