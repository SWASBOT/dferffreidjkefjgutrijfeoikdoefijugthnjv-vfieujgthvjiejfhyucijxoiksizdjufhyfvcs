 const Discord = require("discord.js")
 const config = require ('../../config.json');

 module.exports.run = async (bot, message, args) => {
    //!8ball question
    if(!args[1]) return message.reply("❌ | Veuillez poser une question complète avec 2 mots ou plus.");
    let replies = ["Oui !", "Non !", "Je ne sais pas !", "Pose moi la question plus tard !", "Viktourr !", "Je ne suis pas sûr !", "Sans doute", "Probablement non ! ", "Bien évidemment !", "J'hesite beaucoup !" ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()
    .setDescription("**8Ball**")
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setColor(config.settings.coulour)
    .addField("Question:", question)
    .addField("Réponse", replies[result])
    .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
    .setTimestamp()

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball"
    }
