const Discord = require("discord.js");
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async function(client, message, args) {

            let helputil = new Discord.RichEmbed()
                .setTitle("**➢ Liste des commandes utilitaires**")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .addField(config.settings.prefix + "ping", '``' + config.settings.prefix + "ping <pseudo>`` Envoie ton ping.")
                .addField(config.settings.prefix + "pp", '``' + config.settings.prefix + "pp <pseudo>`` Envoie la photo de profil de la personne mentionnée.")
                .addField(config.settings.prefix + "userinfo", '``' + config.settings.prefix + "userinfo <pseudo>`` Envoie les informations de la personne mentionnée.")
                .addField(config.settings.prefix + "roleinfo", '``' + config.settings.prefix + "roleinfo <nom du role>`` Envoie les informations du nom du rôle précisé.")
                .addField(config.settings.prefix + "serverinfo", '``' + config.settings.prefix + "serverinfo`` Envoie les informations du serveur où la commande est envoyée.")
                .addField(config.settings.prefix + "gsearch", '``' + config.settings.prefix + "gsearch <argument de recherche>`` Cherche le message sur Google et envoie le resultat.")
                .addField(config.settings.prefix + "hastebin", '``' + config.settings.prefix + "hastebin <contenu du hastebin>`` Envoie un lien hastebin avec le message précisé.")
                //.addField(config.settings.prefix + "info", '``' + config.settings.prefix + "info`` Envoie les informations sur le bot.")
                .addField(config.settings.prefix + "advancedinfo", '``' + config.settings.prefix + "advancedinfo`` Envoie les informations complementaire sur le bot.")
                .addField(config.settings.prefix + "lmgtfy", '``' + config.settings.prefix + "lmgtfy <recherche>`` Envoie un lien de recherche lmgtfy.")
                .setThumbnail(config.settings.pp)
                .setColor(config.settings.coulour)
                .setTimestamp()
            message.channel.send(helputil).catch(err => console.log(err));
            message.delete();
}

module.exports.help = {
  name:"util"
}
