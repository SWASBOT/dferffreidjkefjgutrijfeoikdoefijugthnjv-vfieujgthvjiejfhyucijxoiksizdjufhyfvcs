const Discord = require('discord.js')
const fs = require('fs')
const config = require ("../../config.json")

module.exports.run = async (client, message) => {

  var args = message.content.split(` `).slice(1).join(' ');
  if(!args) return message.reply('❌ | Veuillez préciser un texte à mettre dans ton embed').then(msg => msg.delete(3000))

            let emb = new Discord.RichEmbed()
                .setDescription(args)
                .setColor(config.settings.coulour)
                .setTitle('**➢ Annonce**')
                .setFooter('Annonce envoyée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .setTimestamp()
            message.channel.sendEmbed(emb)
            message.delete();
}

module.exports.help = {
    name: "embed"
}
