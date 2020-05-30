const hastebin = require('hastebin-gen');
const Discord = require('discord.js');
const config = require ("../../config.json")

module.exports.run = (client, message, args) => {


     let haste = args.slice(0).join(" ")

     let type = args.slice(1).join(" ")

        if (!args) {
          message.reply("❌ | Veuillez préciser un texte à mettre dans ton hastebin").then(msg => msg.delete(3000));
          message.delete();
        return;
        }

        hastebin(haste).then(r => {

          message.channel.send("➢ Voici ton lien Hastebin: " + r);
          message.delete();

        }).catch(console.error);

}

module.exports.help = {
  name: "hastebin"
}
