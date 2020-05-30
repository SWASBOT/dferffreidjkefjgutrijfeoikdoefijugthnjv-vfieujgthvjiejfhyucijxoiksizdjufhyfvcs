const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
            const veskisbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var veski = new Discord.RichEmbed()
            .setDescription(`**Veski**`)
            .setColor(config.settings.coulour)
            .setThumbnail(`${bot.user.displayAvatarURL}`)
                .addBlankField()
                .addField(`Veski de la part de ${user.username}`, "­ ")
                .setImage("https://media1.giphy.com/media/clEoSalMEOZk4/giphy.gif")
                .setTimestamp()
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(veski)
           });
    }


module.exports.help = {
    name: "veski"
}
