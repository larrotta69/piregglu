const config = {
	PORT: process.env.PORT || 4000,
	DB: 'mongodb://localhost:27017/piregglu',
};

/* eslint-disable no-console */

const mongoose = require('mongoose');

const connectDB = () => {
	mongoose.connect(config.DB, { useNewUrlParser: true });
	mongoose.set('useCreateIndex', true);
	mongoose.connection.on('connected', () => {
		console.log(`Mongoose on connection: ${config.DB}`);
	});

	mongoose.connection.on('error', (error) => {
		console.log(`Mongoose on error: ${error}`);
	});

	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose is disconnected');
	});
};

module.exports = { connectDB, config };
