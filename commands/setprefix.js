exports.run = (client, message, args) => {
	client.functions.getPrefix(message.guild.id, function(prefix) {
		client.functions.hasPrefix(message.guild.id, function(prfBool) {
			if (args.length !== 1) return message.channel.send("Usage: " + prefix + "setprefix <NewPrefix>");
			if (prfBool) {
				client.functions.updatePrefix(message.guild.id, args[0]);
				message.channel.send("I succesfully updaed the prefix to: " + args[0]);
			} else {
				client.functions.registerPrefix(message.guild.id, args[0]);
				message.channel.send("I changed the prefix to: " + args[0]);
			}
		});
	});
}