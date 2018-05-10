const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let pric = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("ShopBot Prices")
    .addField("Discord Bot", "10$", true)
    .addField("Discord Bot + Host", "20$", true)
    .addField("Steam JunkBot", "20$", true)
    .addField("Steam JunkBot + Host", "30$", true)
    .setFooter("ShopBot by Odar", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")

    message.channel.send(pric)

}
    module.exports.help = {
        name: "prices"
}