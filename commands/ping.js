exports.run = (client, message) => {
    message.channel.send(`Hi ${message.author}.. My ping in ms is now: ${Date.now() - message.createdTimestamp }ms`);
}