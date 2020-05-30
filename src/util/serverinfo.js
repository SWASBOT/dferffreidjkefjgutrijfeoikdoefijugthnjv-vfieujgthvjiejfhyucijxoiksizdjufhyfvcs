const Discord = require("discord.js");
const config = require ("../../config.json")

module.exports.run = async (client, message, args) => {


  const verlvl = {
    0: "Aucun",
    1: "Bas",
    2: "Moyen",
    3: "Difficile",
    4: "Hardcore"
  }

    let inline = true
    let sicon = message.guild.iconURL;

    let serverembed = new Discord.RichEmbed()
        .setColor(config.settings.coulour)
        .setThumbnail(message.guild.iconURL)
        .setTitle('**➢ Information de serveur**')
        .setDescription(`Information du serveur ${message.guild.name} 📃`)
        .addField("Nom du serveur:", message.guild.name, inline)
        .addField("ID:", message.guild.id, inline)
        .addField("Créateur:", message.guild.owner, inline)
        .addField("Région:", message.guild.region, inline)
        .addField("Niveau de vérification:", verlvl[message.guild.verificationLevel],inline)
        .addField("Membres:", `${message.guild.memberCount}`, inline)
        .addField("Rôles:", message.guild.roles.size, inline)
        .addField("Nombre de salon:", message.guild.channels.size, inline)
        .addField("Date d'arrivée:", message.member.joinedAt)
        .addField(`Crée le:`, message.guild.createdAt)
        .setTimestamp()
        .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)

    message.channel.send(serverembed);
    message.delete();

}

module.exports.help = {
  name:"serverinfo"
}
