const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
const config = require ("../../config.json")

module.exports.run = async (client, message, args) => {

            let { version } = require("discord.js");

            cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }

              let totalSeconds = (client.uptime / 1000);
              let days = Math.floor(totalSeconds / 86400);
              let hours = Math.floor(totalSeconds / 3600);
              totalSeconds %= 3600;
              let minutes = Math.floor(totalSeconds / 60);
              let secs = totalSeconds % 60;

              let uptime = `${days} jours, ${hours} heures, ${minutes} minutes et ${secs} secondes`;

            let embedStats = new Discord.RichEmbed()
             .setTitle("Informations & statistiques du bot")
             .addField("• Usage de la RAM", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
             .addField("• Uptime ", `${uptime}`, true)
             .addField("• Nombre de serveur", `${client.guilds.size.toLocaleString()}`, true)
             .addField("• Nombre de canaux", `${client.channels.size.toLocaleString()}`, true)
             .addField("• Version de Discord.js", `v${version}`, true)
             .addField("• Version de Node.js", `${process.version}`, true)
             .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
             .addField("• Usage du CPU", `\`${percent.toFixed(2)}%\``,true)
             .addField("• Architecture de l'OS", `\`${os.arch()}\``,true)
             .addField("• Platforme", `\`\`${os.platform()}\`\``,true)
             .setFooter('Commande exécutée par ' + message.author.tag + config.settings.ns, message.author.displayAvatarURL)
             .setThumbnail(config.settings.pp)
             .setTimestamp()
             .setColor(config.settings.coulour)

             message.channel.send(embedStats)
             message.delete();
             })

 }

    module.exports.help = {
        name: "advancedinfo"
    }
