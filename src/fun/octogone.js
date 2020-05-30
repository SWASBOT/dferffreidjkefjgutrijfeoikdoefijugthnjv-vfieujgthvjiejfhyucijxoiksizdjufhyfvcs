const Discord = require("discord.js")
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {
           message.delete();
           const charosbj = message.mentions.users.map(user => {
               if(!message.mentions.users) {
                   message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                   return;
               }
           var octogonesbj = new Discord.RichEmbed()
               .setThumbnail(`${user.displayAvatarURL}`)
               .setDescription("**OCTOGONE**")
               .setColor(config.settings.coulour)
               .addField(`${user.username} j'te propose un octogone sans règles pour que j'éclate ta mère enfant de s*lope 🔪`, "­ ")
               .setTimestamp()
               .setImage("https://thumbs.gfycat.com/AshamedCostlyAfricanmolesnake-max-1mb.gif")
               .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
           message.channel.sendEmbed(octogonesbj)
           });
       }

   module.exports.help = {
       name: "octogone"
   }
