const Discord = require("discord.js")
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {
           message.delete();
           const charosbj = message.mentions.users.map(user => {
               if(!message.mentions.users) {
                   message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                   return;
               }
           var tacossbj = new Discord.RichEmbed()
               .setThumbnail(`${user.displayAvatarURL}`)
               .setDescription("**TACOS**")
               .setColor(config.settings.coulour)
               .addField(`${user.username} gry un bon tacos sa mère.`, "­ ")
               .setTimestamp()
               .setImage("https://cdn.discordapp.com/attachments/647586753322024964/649742904956551169/a_fb946c649641dc300072135e0f802fb3.gif")
               .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
           message.channel.sendEmbed(tacossbj)
           });
   }

   module.exports.help = {
       name: "tacos"
   }
