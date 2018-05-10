const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let invemb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Invite ShopBot")
    .setDescription("To invite Shop bot to your server click [here](https://discordapp.com/oauth2/authorize?client_id=442410451121209365&permissions=604502081&scope=bot)")
    .setThumbnail(bicon)
    .setFooter("ShopBot by Odar", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")

    message.channel.send(invemb)
 

}
    module.exports.help = {
        name: "invite"
}