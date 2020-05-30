 const Discord = require("discord.js")
 const config = require ('../../config.json');

 module.exports.run = async (bot, message, args) => {

        message.delete();
            message.delete();
            const charosbj = message.mentions.users.map(user => {
                if(!message.mentions.users) {
                    message.channel.send("❌ | Veuillez mentionner quelqu'un.");
                    return;
                }
            var charo = new Discord.RichEmbed()
                .setThumbnail(`${user.displayAvatarURL}`)
                .setDescription("**Charo**")
                .setColor(config.settings.coulour)
                .addField(`Hmm, ${user.username} t'es belle à croqué toi`, "­ ")
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/647967616148963348/647967649007009792/94902-2a08hE_ifXpHeN3dpoo0lA.png")
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
            message.channel.sendEmbed(charo)
            });
        }

    module.exports.help = {
        name: "charo"
    }
