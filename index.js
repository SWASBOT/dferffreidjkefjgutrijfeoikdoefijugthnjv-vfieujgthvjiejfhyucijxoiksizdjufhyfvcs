const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////////////////////////////////////////////////////////////
const Discord = require("discord.js");
const config = require("./config.json");
const colors = require("colors");
const request = require("request");
const prefix = config.settings.prefix;
const client = new Discord.Client();
const fs = require("fs");

module.exports = client;
require("./api/index");

console.log("started");

const status = {
  on: "Activé",
  off: "Désactivé"
};

client.on("ready", () => {
  console.log("----------------------------".grey);
  console.log("🌟 Evening Bot demarré avec succés :".underline.white);
  console.log("----------------------------".grey);
  console.log("Liste des class de commandes :") *
    config.commands.class.forEach(none => {
      console.log("» " + none);
    });
  console.log("----------------------------".grey);

  client.user.setActivity("𝑆𝑒𝑐𝑢𝑟𝑖𝑡𝑦 𝐵𝑜𝑡 | /help", {
    type: "STREAMING",
    url: "https://www.twitch.tv/enevening"
  });

  /*
    var interval = setInterval (function () {
      client.user.setActivity('@NexoviaServ sur Twitter 🐦 | /help', { type: 'WATCHING' })
    }, 3000)
    var interval = setInterval (function () {
      client.user.setActivity('@NexoviaServ sur Instagram 📸 | /help', { type: 'WATCHING' })
    }, 3000);
    var interval = setInterval (function () {
      client.user.setActivity('https://nexovia.fr 🌐 | /help', { type: 'WATCHING' })
    }, 3000);
    */
});

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(client, message, args);
});

client.commands = new Discord.Collection();

var commandsclass = config.commands.class;

var today = new Date();
var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
var month =
  today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth() + 1;
var year = today.getFullYear();
var hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
var minutes =
  today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
var seconds =
  today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
var milliseconds = today.getMilliseconds();
var time =
  "[".grey + hours + ":".grey + minutes + ":".grey + seconds + "]".grey;
var btime =
  "[" + hours + ":" + minutes + ":" + seconds + "." + milliseconds + "]";
var date = "[".grey + day + "/".grey + month + "/".grey + year + "]".grey;
var bdate = "[" + day + "/" + month + "/" + year + "]";

fs.appendFile(
  "logs.txt",
  `
${bdate} ${btime} Starting`,
  function(err) {
    if (err) return console.error(err);
  }
);

fs.appendFile(
  "logs.txt",
  `
${bdate} ${btime} Loading commands`,
  function(err) {
    if (err) return console.error(err);
  }
);
commandsclass.forEach(c => {
  fs.readdir(`./src/${c}/`, (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      console.log(
        `» Impossible de trouver des commandes dans la catégorie ${c}`
      );
      return;
    }

    jsfile.forEach((f, i) => {
      var today = new Date();
      var lday = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
      var lmonth =
        today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth() + 1;
      var lyear = today.getFullYear();
      var lhours =
        today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
      var lminutes =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
      var lseconds =
        today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
      var lmilliseconds = today.getMilliseconds();
      var ltime =
        "[".grey +
        lhours +
        ":".grey +
        lminutes +
        ":".grey +
        lseconds +
        "]".grey;
      var lbtime =
        "[" +
        lhours +
        ":" +
        lminutes +
        ":" +
        lseconds +
        "." +
        lmilliseconds +
        "]";
      var ldate =
        "[".grey + lday + "/".grey + lmonth + "/".grey + lyear + "]".grey;
      var lbdate = "[" + lday + "/" + lmonth + "/" + lyear + "]";
      let props = require(`./src/${c}/${f}`);

      console.log(`» La commande ${f} dans la catégorie ${c} est chargée !`);
      fs.appendFile(
        "logs.txt",
        `
${lbdate} ${lbtime} Loading ${f}`,
        function(err) {
          if (err) return console.error(err);
        }
      );
      client.commands.set(props.help.name, props);
    });
  });
});

module.exports = client;
if (config.settings.channel.welcome.status === "on") {
  require("./events/guildMemberAdd");
}
if (config.settings.channel.log.memberadd === "on") {
  require("./events/guildMemberAdd");
}
if (config.settings.channel.log.memberremove === "on") {
  require("./events/guildMemberRemove");
}
if (config.settings.channel.log.msgdelete === "on") {
  require("./events/messageDelete");
}
if (config.settings.channel.log.msgedit === "on") {
  require("./events/messageEdit");
}

client.login(config.connection.token);
