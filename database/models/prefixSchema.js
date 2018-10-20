const mongoose = require('mongoose');

const prefixSchema = new mongoose.Schema({
	_id: String,
	content: String
});

module.exports = mongoose.model("Prefixes", prefixSchema);