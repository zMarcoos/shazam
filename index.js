const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
require("./functions")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = {
    client: client
};