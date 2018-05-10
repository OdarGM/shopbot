const Discord = require("discord.js");
const fs = require("fs");
const DBL = require("dblapi.js");
const botSettings = require("./settings.json")
const prefix = botSettings.prefix;
const client = new Discord.Client();
const dbl = new DBL('Your discordbots.org token', client);

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands found to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => { 

bot.user.setStatus('Online')

bot.user.setActivity(`]help`);
    

try {
    console.log("https://discordapp.com/api/oauth2/authorize?client_id=442410451121209365&permissions=604502081&scope=bot")
    } catch(e) {
        console.log(e.stack);
        }
});
     
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});

bot.login("TOKEN")
