const Discord = require('discord.js');
const intents = new Discord.IntentsBitField(3276799);
const client = new Discord.Client({intents});
require("dotenv").config();
const config = require('./config.json');
const loadCommands = require('./Loaders/loadCommands');
const loadEvents = require('./Loaders/loadEvents');

client.commands = new Discord.Collection();
client.commandsList = [];

console.log('\nLancement du bot :\n')

loadCommands(client);
loadEvents(client);
client.login(process.env.BOT_TOKEN);