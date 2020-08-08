const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
require("./functions")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = {
    client: client
};
