const Discord = require("discord.js");
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async function(client, message, args) {

            let help = new Discord.RichEmbed()
                .setTitle("**➢ Liste des commandes de modération**")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .addField(config.settings.prefix + "ban", '``' + config.settings.prefix + 'ban <pseudo>`` Bannir un membre du serveur.')
                .addField(config.settings.prefix + "unban", '``' + config.settings.prefix + 'unban <pseudo>`` débannir un membre du serveur.')
                .addField(config.settings.prefix + "kick", '``' + config.settings.prefix + 'kick <pseudo>`` Éjecter un membre du serveur.')
                .addField(config.settings.prefix + "purge", '``' + config.settings.prefix + 'purge <nombre de message>`` Supprime le nombre de message précisé.')
                .addField(config.settings.prefix + "mute", '``' + config.settings.prefix + 'mute <pseudo>`` Rend un membre du serveur muet.')
                .addField(config.settings.prefix + "warn", '``' + config.settings.prefix + 'warn <pseudo>`` Averti un membre lors d\'une infraction au réglement du serveur.')
                .addField(config.settings.prefix + "unwarn", '``' + config.settings.prefix + 'unwarn <pseudo>`` Supprime l\'avertissement d\'un membre.')
                .setThumbnail(config.settings.pp)
                .setColor(config.settings.coulour)
                .setTimestamp()
            message.channel.send(help).catch(err => console.log(err));
            message.delete();

}

module.exports.help = {
  name:"mod"
}
