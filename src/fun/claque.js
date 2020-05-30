const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
            message.delete();
            const tartesbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var tarte = new Discord.RichEmbed()
                .setDescription(`**La Claque**`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setColor(config.settings.coulour)
                .addField(`Je te mets une claque virtuelle enfant de salope 👊`, user.username)
                .setTimestamp()
                .setImage("https://cdn.myanimelist.net/s/common/uploaded_files/1479268388-e026a31596b92834f423c09b5d47faf1.gif")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(tarte)
            });
    }


module.exports.help = {
    name: "claque"
}
