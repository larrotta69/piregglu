const createDataAccessObject = () => ({
	create(data, cb) {
		const instace = new this(data);
		instace.save(cb);
	},
	get(query, cb) {
		this.find(query, cb).collation({ locale: 'en', strength: 2 });
	},
	update(query, updateData, cb) {
		this.findOneAndUpdate(query,
			{ $set: updateData },
			{ new: true },
			cb);
	},
	delete(query, cb) {
		this.findOneAndDelete(query, cb);
	},
});

module.exports = createDataAccessObject;
