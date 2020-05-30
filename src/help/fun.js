const Discord = require("discord.js");
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async function(client, message, args) {

            let helputil = new Discord.RichEmbed()
                .setTitle("**➢ Liste des commandes fun**")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .addField(config.settings.prefix + "8ball", '``' + config.settings.prefix + "8ball <question>`` Réponds à ta question.")
                .addField(config.settings.prefix + "charo", '``' + config.settings.prefix + "charo`` Envoie un gif charo.")
                .addField(config.settings.prefix + "claque", '``' + config.settings.prefix + "claque <pseudo>`` Fout une claque à la personne mentionnée.")
                .addField(config.settings.prefix + "gif", '``' + config.settings.prefix + "gif <recherche>`` Recherche un gif en fonction de ta recherche.")
                .addField(config.settings.prefix + "hug", '``' + config.settings.prefix + "hug`` Fait un câlin la personne mentionnée.")
                .addField(config.settings.prefix + "iloveyou", '``' + config.settings.prefix + "iloveyou <pseudo>`` Déclare ta flamme à la personne mentionnée.")
                .addField(config.settings.prefix + "kiss", '``' + config.settings.prefix + "kiss <pseudo>`` Envoie un kiss à la personne mentionnée.")
                .addField(config.settings.prefix + "ko", '``' + config.settings.prefix + "kiss <pseudo>`` Met un K.O. à la personne mentionnée.")
                .addField(config.settings.prefix + "octogone", '``' + config.settings.prefix + "octogone <pseudo>`` Provoque un octogone avec la personne mentionnée.")
                .addField(config.settings.prefix + "punch", '``' + config.settings.prefix + "punch <pseudo>`` Envoie un punch à la personne mentionnée.")
                .addField(config.settings.prefix + "tacos", '``' + config.settings.prefix + "tacos`` Envoie un gif tacos.")
                .addField(config.settings.prefix + "tire", '``' + config.settings.prefix + "tire <pseudo>`` Tire sur la personne mentionnée.")
                .addField(config.settings.prefix + "veski", '``' + config.settings.prefix + "veski <pseudo>`` Envoie un veski à la personne mentionnée.")
                .setThumbnail(config.settings.pp)
                .setColor(config.settings.coulour)
                .setTimestamp()
            message.channel.send(helputil).catch(err => console.log(err));
            message.delete();
}

module.exports.help = {
  name:"fun"
}
