const Discord = require('discord.js');
var request = require('request');
const config = require ("../../config.json")

module.exports.run = async function(client, message, args) {
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


    const deleteCount = parseInt(args[0], 10);

    if (!message.member.hasPermission("BAN_MEMBERS"))
       return message.reply("`❌` | Vous n'avez pas la permission de supprimer des messages.").then(msg => msg.delete(3000));
       message.delete();

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("`❌` | Veuillez préciser un nombre de message à supprimer entre 2 et 100.").then(msg => msg.delete(3000));
      message.delete();

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched).then(msg => message.reply(`${deleteCount} messages ont été supprimés`)).then(msg => msg.delete(3000));
    message.delete();
};

module.exports.help = {
    name:"purge"
  }
