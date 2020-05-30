const Discord = require("discord.js")
const config = require ('../../config.json');

module.exports.run = async (bot, message, args) => {

       message.delete();
           const charosbj = message.mentions.users.map(user => {
               if(!message.mentions.users) {
                   message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                   return;
               }
           var kosbj = new Discord.RichEmbed()
               .setThumbnail(`${user.displayAvatarURL}`)
               .setDescription("**K.O.**")
               .setColor(config.settings.coulour)
               .addField(`J'ai mis ${user.username} au sol par un double coup de jambe`, "­ ")
               .setTimestamp()
               .setImage("https://66.media.tumblr.com/97f2149f68e0f0687b12b91fcc1d3882/tumblr_o1a9fk3BaX1ry1rm7o2_400.gif")
               .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
           message.channel.sendEmbed(kosbj)
           });
   }

   module.exports.help = {
       name: "ko"
   }
