const Discord = require('discord.js');
var request = require('request');
const config = require ("../../config.json")

module.exports.run = async function(client, message, args) {

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission d'éjecter des membres").then(msg => msg.delete(3000));

        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply('`❌` | Veuillez préciser un utilisateur à éjecter.').then(msg => msg.delete(3000));
        if(!member.kickable)
          return message.reply("`❌` | Je ne peux pas éjecter un membre plus haut gradé que moi.").then(msg => msg.delete(4000));

        let reason = `Demandé par ${message.author.username} pour: ` + args.slice(1).join(' ');
        if(!reason) reason = `Demandé par ${message.author.username} pour : aucune raison.`;

        await member.kick(reason)
          .catch(error => console.log(error))
          if(!args.slice(1)) {
            var rembed;
            rembed = 'aucune raison'
          } else {
            rembed = args.slice(1).join(' ')
          }
  
  if(rembed === undefined){
    
  }
        const kickConfirmation = new Discord.RichEmbed()
          .setTitle('**➢ Éjection**')
          .setThumbnail(member.displayAvatarURL)
          .setColor(config.settings.coulour)
          .setTimestamp()
          .setDescription(`:police_officer:・Modérateur : ${message.author}
:bust_in_silhouette:・Victime : ${member.user.tag} / ${member.user} (${member.user.id})
❔・Raison : ${rembed}`)
          .setImage("https://media0.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif?cid=790b761122943bef5498ee6f6d20f169d4023e2833d1d738&rid=giphy.gif")
        message.channel.send(kickConfirmation)
        message.delete();

        var today = new Date();
        var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
        var month = today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()+ 1
        var year = today.getFullYear()
        var hours = today.getHours()< 10 ? "0" + today.getHours() : today.getHours()
        var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
        var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
        var milliseconds = today.getMilliseconds()
        var btime = ("[" + hours + ":" + minutes + ":" + seconds + "." + milliseconds + "]");
        var bdate = ("[" + day + "/" + month + "/" + year + "]");

        const logkick = new Discord.RichEmbed()
          .setFooter('Logger ' + config.settings.ns, member.displayAvatarURL)
          .setColor(config.settings.coulour)
          .setTimestamp()
          .setDescription(`${bdate} ${btime} Éjection d\'un membre
:police_officer:・Modérateur: ${message.author}
:bust_in_silhouette:・Victime: ${member.user.tag} / ${member.user} (${member.user.id})
❔・Raison: ${reason}`)
    client.channels.get(config.settings.channel.log.channelid).send(logkick);
};

module.exports.help = {
    name:"kick"
  }
