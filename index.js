const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');

const client = new Discord.Client();
const admin = new Enmap()
const config = require('./config.json');
client.config = config;

const functions = require('./functions');
// const admin_functions = require('./admin_functions');
// admin.functions = admin_functions;
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

// // adding admin events
// fs.readdir("./admin_events/", (err, files) => {
//   if (err) return console.error(err);
//   console.log("\n---=[Loading Admin Events...]=---\n");
//   files.forEach(file => {
//     const event = require(`./admin/events/${file}`);
//     let eventName = file.split(".")[0];
//     console.log(`${eventName} has been loaded!`);
//     admin.on(eventName, event.bind(null, admin));
//   });
// });

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

// // adding admin commands
client.commands.admin = new Enmap();

fs.readdir("./admin/commands", (err, files) => {
  if (err) return console.error(err);
  console.log("\n---=[Loading Admin Commands...]=---\n");
  
  files.forEach(file => {
    console.log(file);
    if (!file.endsWith(".js")) return;
    let props = require(`./admin/commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} has been loaded!`);
    client.commands.admin.set(commandName, props);
  });
});

// Connecting to the database
require('./database/connector');

client.login(config.token);