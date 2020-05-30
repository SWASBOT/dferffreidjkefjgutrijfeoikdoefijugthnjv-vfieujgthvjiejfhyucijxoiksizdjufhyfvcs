const Discord = require("discord.js")
const giphy = require('giphy-api')("kanzbqXaPSplHMAgzLFz97g3NIdNsC2w");
const config = require ('../../config.json');

module.exports.run = (bot, message, args) => {
  if (args.length === 0) {
    message.edit('❌ | Veuillez préciser un gif à rechercher.')
    return;
  }
  if (args.length === 1) {
    term = args.toString()
  } else {
    term = args.join(" ");
  }
  message.delete();
  giphy.search(term).then(function (res) {
    // Res contains gif data!
    let id = res.data[0].id
    let gifurl = `https://media.giphy.com/media/${id}/giphy.gif`
    let gifemb = new Discord.RichEmbed()
                .setDescription("**GIFS TROUVÉ !**")
                .setColor(config.settings.coulour)
                .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
                .addField("Voici ton gif !", "­ ")
                .setImage(gifurl)
                .setTimestamp()
            message.channel.send(gifemb).catch(err => console.log(err));

  });
}

module.exports.help = {
    name: "giphy"
  }
