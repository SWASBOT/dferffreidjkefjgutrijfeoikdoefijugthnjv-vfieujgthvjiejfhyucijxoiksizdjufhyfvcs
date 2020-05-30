const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');

            message.delete();
            const kisssbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var kiss = new Discord.RichEmbed()
                .setThumbnail(`${user.displayAvatarURL}`)
                .setDescription("**Kiss**")
                .setColor(config.settings.coulour)
                .addField(`Je t'embrasse 💋 ${user.username}`, "­ ")
                .setTimestamp()
                .setImage("https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(kiss)
            });
        }

module.exports.help = {
    name: "kiss"
}
