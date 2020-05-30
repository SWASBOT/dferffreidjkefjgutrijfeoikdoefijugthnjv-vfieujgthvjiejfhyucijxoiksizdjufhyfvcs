const Discord = require('discord.js');
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

    let punchgifs = ["https://thumbs.gfycat.com/BitesizedEnragedAfricanaugurbuzzard-size_restricted.gif", "https://i.imgur.com/g91XPGA.gif"];

    let gifs = Math.floor((Math.random() * punchgifs.length));

  var argresult = message.content.split(` `).slice(1).join(' ');
            const punchsbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var punch = new Discord.RichEmbed()
                .setDescription(`**Punch**`)
                .setThumbnail(`${user.displayAvatarURL}`)
                .setColor(config.settings.coulour)
                .addField(`Je te mets une tarte virtuelle fils de v*ole. 👊`, user.username)
                .setTimestamp()
                .setImage(punchgifs[gifs])
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(punch)
           });
    }


module.exports.help = {
    name: "punch"
}
