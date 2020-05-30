const Discord = require('discord.js');
const fs = require('fs');
const config = require ("../../config.json")

module.exports.run = async (bot, message, args) => {
    const avatarList = message.mentions.users.map(user => {
        if (!user) {
            const getav_embed = new Discord.RichEmbed()
            .setThumbnail(config.settings.pp)
            .setDescription(`Voici ta photo de profil 📸.`)
            .setImage(`${message.author.displayAvatarURL}`)
            .setTimestamp()
            .setColor(config.settings.coulour)
        message.channel.send(getav_embed);
        message.delete();
        }
        if (user) {
            const getav_embed = new Discord.RichEmbed()
                .setThumbnail(config.settings.pp)
                .setDescription(`Voici la photo de profil de ${user.username} 📸.`)
                .setImage(`${user.displayAvatarURL}`)
                .setTimestamp()
                .setColor(config.settings.coulour)
            message.channel.sendEmbed(getav_embed);
            message.delete();
        }
    });

}
module.exports.help = {
    name: "pp"
}
