const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
            const tiresbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var tire = new Discord.RichEmbed()
                .setDescription(`**Le Gun**`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setColor(config.settings.coulour)
                .addField(`Po, prends ma balle dans ta g*eule fils de cancereuse 🔫`, user.username)
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/647967616148963348/648005187889266718/39443-full.gif")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(tire)
          });
        }


module.exports.help = {
    name: "tire"
}
