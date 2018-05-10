const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let dachan = bot.channels.get("443003387970060289")

    let bicon = bot.user.displayAvatarURL;

    let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    let rate = args.join(` `);

    if(rates.includes(rate)) {

    let emb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Rate us")
    .addField("Rated by", message.author, true)
    .addField("Rate", rate, true)
    .setFooter("ShopBot by Odar", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")

    dachan.send(emb)

    } else {
        message.channel.send("Rates are 1-10")
    }


}
    module.exports.help = {
        name: "rate"
}