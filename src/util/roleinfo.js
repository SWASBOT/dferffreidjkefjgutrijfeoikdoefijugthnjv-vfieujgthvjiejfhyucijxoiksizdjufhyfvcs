const Discord = require("discord.js");
const config = require ("../../config.json")

module.exports.run = async (client, message, args) => {


    let inline = true

    let role = message.mentions.roles.first()
    if(!role) return message.reply("❌ | Veuillez préciser un rôle").then(msg => msg.delete(3000));
    let gRole = message.guild.roles.find('name', role);
    if(!gRole) return message.reply("❌ | Impossible de trouver ce rôle !").then(msg => msg.delete(3000));

    const status = {
        false: "❌",
        true: "✅"
      }

    let roleemebed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setColor(gRole.hexColor)
    .addField("ID", gRole.id, inline )
    .addField("Nom du role", gRole.name, inline)
    .addField("Mention", `\`<@${gRole.id}>\``, inline)
    .addField("Couleur", gRole.hexColor, inline)
    .addField("Membres ayant ce rôle", gRole.members.size, inline)
    .addField("Position du rôle", gRole.position, inline)
    .addField("Mentionable", status[gRole.mentionable], inline)
    .addField("Gérer", status[gRole.managed], inline)
    .setDescription(`Information sur le rôle ${gRole.name}`)
    .setTimestamp()
    .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)

    message.channel.send(roleemebed);
    message.delete();
    }


module.exports.help = {
  name:"roleinfo"
}
