exports.run = (client, message, args) => {
  if (message.author.id !== client.config.devID) return;
  if (!args || args.size < 1) return message.channel.send("Must provide a command name to reload.");
  const commandName = args[0];
  if (!client.commands.has(commandName)) {
    return message.channel.send("That command does not exist");
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.channel.send(`The command ${commandName} has been reloaded`);
  client.functions.writeLogs(`${commandName} has been reloaded by ${message.author.tag} (${message.author.id})`);
}