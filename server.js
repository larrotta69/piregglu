const express = require('express');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config(); // eslint-disable-line global-require
}

const { config, connectDB } = require('./API/config/');
const pokemonRoutes = require('./API/pokemon/pokemon.routes');
const typeRoutes = require('./API/type/type.routes');

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

const app = express();
const router = express.Router();
connectDB();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization');
	next();
});

app.use('/api', router);
pokemonRoutes(router);
typeRoutes(router);

app.listen(config.PORT, () => {
	console.log(`Server is running on ${config.PORT} port.`); // eslint-disable-line no-console
});
