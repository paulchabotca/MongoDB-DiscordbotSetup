# StableDiscordBotSetup (MongoDB)

If you don't want to use the MongoDB Version checkout the (Normal Version)[https://github.com/jerskisnow/StableDiscordBotSetup]

Commands:
```
npm init
npm install discord.js
npm install moment
npm install enmap
```

Keep in mind, the getPrefix function is using a callback method so if you want to call the function in an other class run the following code:
``` client.functions.getPrefix(message.guild.id, function(prefix) {

        console.log(prefix);

    });
```
Oh yeah and make sure to check if the guild has a prefix using the hasPrefix function! (That one will return true or false)

Don't worry you can see an example of this in the septrefix.js file!