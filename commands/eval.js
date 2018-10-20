exports.run = (client, message) => {
  const args = message.content.split(" ").slice(1);
  if (message.author.id !== client.config.devID) return;
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(client.functions.clean(evaled), {
      code: "xl"
    });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${client.functions.clean(err)}\n\`\`\``);
  }
}