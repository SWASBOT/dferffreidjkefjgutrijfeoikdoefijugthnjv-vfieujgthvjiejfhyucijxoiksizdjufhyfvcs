const Discord = require("discord.js");
const config = require ("../../config.json")

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: "Ne pas déranger",
        offline: "Hors ligne"
      }

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "✅";
  } else {
    bot = "❌";
  }
  
             		let day =  member.guild.joinedAt.getDate()
		let month = 1 + member.guild.joinedAt.getMonth()
		let year =  member.guild.joinedAt.getFullYear()
		let hour = member.guild.joinedAt.getHours()
		let min = member.guild.joinedAt.getMinutes()
		let days = member.user.createdAt.getDate()
		let months = 1 + member.user.createdAt.getMonth()
		let years = member.user.createdAt.getFullYear()
		let hours = member.user.createdAt.getHours()
		let mins = member.user.createdAt.getMinutes()
    
    
            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setTitle("**➢ Information d'un utilisateur**")
                .setColor(config.settings.coulour)
                .addField("Pseudonyme", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
                .addField("Joue à", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Rien"}`,inline, true)
                .addField("Rôles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "❌ Aucun rôles"}`, true)
                .addField(`Compte crée le ${days}/${months}/${years} à ${hours}:${mins}`)
                .setDescription(`Information sur ${member.user.username} 📃`)
                .setTimestamp()
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)

            message.channel.send(embed).catch(error => console.log(error));
            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
