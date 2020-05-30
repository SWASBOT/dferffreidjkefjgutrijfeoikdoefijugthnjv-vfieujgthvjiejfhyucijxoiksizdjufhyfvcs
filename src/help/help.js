const Discord = require("discord.js");
const fs = require('fs');
const config = require ('../../config.json');

module.exports.run = async function(client, message, args) {

            let help = new Discord.RichEmbed()
                .setTitle("**➢ Liste des commandes**")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .addField(config.settings.prefix + "fun", "Affiche les commandes fun.")
                .addField(config.settings.prefix + "util", "Affiche les commandes utiles.")
                //.addField(config.settings.prefix + "radio", "Affiche les commande de la radio.")
                .addField(config.settings.prefix + "mod", "Affiche les commandes de modération.")
                //.addField(config.settings.prefix + "admin", "Affiche les commandes pour administrateur.")
                .addField(config.settings.prefix + "info", "Affiche les informations sur le bot.")
                .setThumbnail(config.settings.pp)
                .setColor(config.settings.coulour)
                .setTimestamp()
            message.channel.send(help).catch(err => console.log(err));
            message.delete();

}

module.exports.help = {
  name:"help"
}
