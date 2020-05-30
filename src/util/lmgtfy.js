const Discord = require('discord.js');
const fs = require('fs');
const config = require ("../../config.json")

module.exports.run = async (client, message) => {

    let args = message.content.split(" ")
    args.shift()

    if(!args) {
        message.reply('❌ | Veuillez préciser un argument de recherche').then(msg => msg.delete(3000));
        message.delete();
    return;
    }

            message.channel.send('➢ Lien LMGTFY: https://lmgtfy.com/?q=' + args.join("%20"))
            message.delete();
    }


module.exports.help = {
    name: "lmgtfy"
}
