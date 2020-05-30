const Discord = require ("discord.js")
const config = require ("../config.json")
const client = require ("../index")
const moment = require ("moment")



  const wait = require('util').promisify(setTimeout);
  
client.on('guildMemberAdd', member => {
  
           		let day =  member.guild.joinedAt.getDate()
		let month = 1 + member.guild.joinedAt.getMonth()
		let year =  member.guild.joinedAt.getFullYear()
		let hour = member.guild.joinedAt.getHours()
		let min = member.guild.joinedAt.getMinutes()
		let days = member.user.createdAt.getDate()
		let months = 1 + member.user.createdAt.getMonth()
		let years = member.user.createdAt.getFullYear()
		let hours = member.user.createdAt.getHours()
		let mins = member.user.createdAt.getMinutes()
    
    
    var today = new Date();
    var dayss = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    var monthss = today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()+ 1
    var yearss = today.getFullYear()
    var hourss = today.getHours() + 1 < 10 ? "0" + today.getHours() + 1 : today.getHours() + 1
    var minutess = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    var secondss = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
    var milliseconds = today.getMilliseconds()
    var btime = ("[" + hours + ":" + minutess + ":" + secondss + "." + milliseconds + "]");
    var bdate = ("[" + day + "/" + month + "/" + year + "]");

    if(config.settings.channel.welcome.status === 'on') {
        let bvnembed = new Discord.RichEmbed()
                    .setTitle(`**➢ Bienvenue à ${member.user.username}**`)
                    .addField(`Compte créé le ${days}/${months}/${years} à ${hours}:${mins}
Grâce à lui, nous sommes maintenant ${member.guild.memberCount} sur le Discord !`, "­ ")
                    .setThumbnail(member.user.displayAvatarURL)
                    .setColor('#FF0000')
                    .setFooter('Evening™ - 2020', member.displayAvatarURL)
                    .setTimestamp()

    client.channels.get(config.settings.channel.welcome.channelid).send(bvnembed);
    client.channels.get(config.settings.channel.welcome.channelid).send(`${member.user}`).then(msg => msg.delete(500));
    }
    
    let logembed = new Discord.RichEmbed()
                    .setDescription(`${member.user} a rejoint le serveur !`)
                    .setColor('#FF0000')
                    .setTimestamp()
                    .setFooter('Logger | Evening™ - 2020', member.displayAvatarURL)

    client.channels.get(config.settings.channel.log.channelid).send(logembed)

    
});