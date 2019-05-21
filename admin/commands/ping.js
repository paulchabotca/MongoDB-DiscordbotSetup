exports.run = (client, message) => {
    message.author.send(`Hi ${message.author}.. My ping in ms is now: ${Date.now() - message.createdTimestamp }ms`);
}