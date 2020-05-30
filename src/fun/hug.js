const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
            message.delete();
            const hugsbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.edit("❌ | Veuillez mentionner quelqu'un.").then(msg => msg.delete(3000));
                    return;
                }
            var hug = new Discord.RichEmbed()
                .setThumbnail(`${user.displayAvatarURL}`)
                .setDescription("**Câlin**")
                .setColor(config.settings.coulour)
                .addField(`Je te fais un câlin ${user.username}`, "­ ")
                .setTimestamp()
                .setImage("https://i.pinimg.com/originals/6b/4b/b8/6b4bb8820a05a841d3317172b7b0224f.gif")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(hug)
            });
    }


module.exports.help = {
    name: "hug"
}
