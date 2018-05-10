const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let inv = await message.guild.channels.first().createInvite()

    let msg = args.join(` `)

    if(!msg) return message.reply("Please give us reason for contacting").then(msg => {msg.delete(5000)});

    let emb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Contact from ShopBot")
    .setDescription(msg)
    .addField("Server", `[${message.guild.name}](${inv.url})`, true)
    .addField("User", message.author, true)
    .addField("User ID", message.author.id)
    .setTimestamp()

    bot.users.get("291221132256870400").send(emb);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Message Sent!")
    .setDescription("Your contact message has been sent!")
    .addField("Reqested by ", message.auhor)
    .addField("Message: ", msg)
    .setFooter("Thanks you for contacting with the ShopBot support!")
    .setFooter("ShopBot by Odar", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();

 
}
    module.exports.help = {
        name: "contact"
}