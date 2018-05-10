const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let inline = true

    let bicon = bot.user.displayAvatarURL;
 
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("ShopBot")
    .setThumbnail(bicon)
    .addField("Help", "Displays all commands", inline)
    .addField("Buy", "Shows what you can buy", inline)
    .addField("Order", "Order the bot", inline)
    .addField("Prices", "Displays Prices", inline)
    .addField("Donate", "Donate to the bot", inline)
    .addField("Contact", "Contact with the owner", inline)
    .addField("Rate", "Rate your services", inline)
    .addField("Invite", "Invite the bot", inline)
    .addField("Support Server", "[ShopBot](https://discord.gg/AhgGbR8)", inline)
    .addField("Server", "[Odar Army](https://discord.gg/zvvasbc)", inline)
    .setFooter("ShopBot by Odar", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")

    message.channel.send(embed)

}
    module.exports.help = {
        name: "help"
}