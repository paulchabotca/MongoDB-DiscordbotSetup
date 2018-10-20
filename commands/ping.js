exports.run = (client, message) => {
    message.channel.send(`My ping in ms is now: ${Date.now() - message.createdTimestamp }ms`);
}