const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');

const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

const functions = require('./functions');
client.functions = functions;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  console.log("\n---=[Loading Events...]=---\n");
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`${eventName} has been loaded!`);
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  console.log("\n---=[Loading Commands...]=---\n");
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} has been loaded!`);
    client.commands.set(commandName, props);
  });
});

// Connecting to the database
require('./database/connector');

client.login(config.token);