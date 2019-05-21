
exports.run = (client, message) => {
    client.functions.getUser(message.author.id, function(user) {
        // Check if message contains the prefix
        if(!user){
            message.channel.send(`Hi ${message.author}! You have no rank peasant!`);
        }
    });
}