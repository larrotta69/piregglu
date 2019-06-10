const Type = require('./type.controller');

module.exports = (router) => {
	router.get('/types', Type.getTypes);
};
