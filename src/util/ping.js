const Discord = require('discord.js');
const fs = require('fs');
const config = ('../../config.json');

module.exports.run = async function(client, message, args) {


            let ping = new Discord.RichEmbed()
                .setTitle('➢ Ping du bot')
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .setDescription(`Latence du bot : ${client.pings[0]}ms`)
                .setThumbnail(config.settings.pp)
                .setColor(config.settings.coulour)
                .setTimestamp()
            message.channel.send(ping).catch(err => console.log(err));
            message.delete();

}

module.exports.help = {
    name: "ping"
}
