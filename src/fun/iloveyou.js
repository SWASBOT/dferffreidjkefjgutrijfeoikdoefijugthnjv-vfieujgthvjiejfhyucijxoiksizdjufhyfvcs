const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
            message.delete();
            const lovesbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var iloveyou = new Discord.RichEmbed()
                .setDescription("**I LOVE YOU**")
                .setThumbnail(`${user.displayAvatarURL}`)
                .setColor(config.settings.coulour)
                .addField(`Je t'aime ❤ ${user.username}`, "­ ")
                .setTimestamp()
                .setImage("https://media1.tenor.com/images/433a5625a2aae2793b23a3cc38260afb/tenor.gif?itemid=12802747")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(iloveyou)
            });
        }


module.exports.help = {
    name: "iloveyou"
}
