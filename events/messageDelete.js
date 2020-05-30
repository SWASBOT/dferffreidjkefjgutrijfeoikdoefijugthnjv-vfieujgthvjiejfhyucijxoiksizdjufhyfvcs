const Discord = require ("discord.js")
const config = require ("../config.json")
const client = require ("../index")
const moment = require ("moment")

  const wait = require('util').promisify(setTimeout);
  
client.on('messageDelete', message => {
    var today = new Date();
    var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    var month = today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()+ 1
    var year = today.getFullYear()
    var hours = today.getHours() + 1 < 10 ? "0" + today.getHours() + 1 : today.getHours() + 1
    var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
    var milliseconds = today.getMilliseconds()
    var btime = ("[" + hours + ":" + minutes + ":" + seconds + "." + milliseconds + "]");
    var bdate = ("[" + day + "/" + month + "/" + year + "]");

    if(message.author.id === client.user.id) return
    if(message.content.startsWith(config.settings.prefix)) return

    if(message.channel.type == 'text') {

        let logembed = new Discord.RichEmbed()
                    .setDescription(' Le message **"' + message.content + '"** envoyé par ' + message.author + " dans le salon " + message.channel + " a été supprimé.")
                    .setColor('#FF0000')
                    .setTimestamp()
                    .setFooter('Logger | Evening™ - 2020', message.author.displayAvatarURL)

        client.channels.get(config.settings.channel.log.channelid).send(logembed)
    }

});
