module.exports = (client) => {
	client.user.setActivity('Code', {
		type: 'WATCHING'
	});

	client.functions.writeLogs("Bot has been activated!");

	console.log("\n---=[Events & Commands has been loaded succesfully!]=---");
	
}