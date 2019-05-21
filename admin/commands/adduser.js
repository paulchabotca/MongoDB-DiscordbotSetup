exports.run = (client, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    for (arg in args) {
        console.log("Arg: " + arg);
    }
    message.author.send(`I have added <User to watch>: ${Date.now() - message.createdTimestamp }ms`);
}