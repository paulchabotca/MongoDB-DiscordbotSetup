module.exports = (client, message) => {
	
	if (message.channel.type == "dm") {
		console.log("Channel Message Type: " + message.channel.type);
		console.log("A direct message has been received...");
		if (message.author.id !== client.config.devID) return;
		// Check if message contains the prefix
		prefix = '!admin ';
		if (message.content.indexOf(prefix) !== 0) return;
		//gather the arguments
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		console.log("Command: " + command);
		const cmd = client.commands.admin.get(command);
		if (!cmd) return;
		console.log("running admin command...");
		cmd.run(client, message, args);
	} else {
		console.log("Processing message...");
		console.log("Prefix" + message.content.indexOf("!"));
		if (message.author.bot) return;
		if (!message.guild) return;
		client.functions.getPrefix(message.guild.id, function (prefix) {
			// Check if message contains the prefix
			//console.log("Prefix" + message.content.indexOf(prefix));
			if (message.content.indexOf(prefix) !== 0) return;
			//gather the arguments
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const command = args.shift().toLowerCase();
			const cmd = client.commands.get(command);
			if (!cmd) return;
			cmd.run(client, message, args);
		});
	}
}