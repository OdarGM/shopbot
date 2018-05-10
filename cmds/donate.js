const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let emb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Donate to ShopBot")
    .addField("PayPal", "[PayPal](https://paypal.me/odar)", true)
    .addField("Patreon", "[Patreon](https://www.patreon.com/bePatron?c=1218005)", true)
    .setFooter("ShopBot by Odar", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")

    message.channel.send(emb)


}
    module.exports.help = {
        name: "donate"
}