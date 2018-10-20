const mongoose = require('mongoose');
const config = require("../config.json");
const functions = require('../functions');

const url = config.dbUrl;

mongoose.connect(url, {
	useNewUrlParser: true,
	socketTimeoutMS: 0,
	keepAlive: true,
	reconnectTries: 30
});

functions.writeLogs("Succesfully connected to the database!");

console.log("\n---=[Database Connected]=---\n");