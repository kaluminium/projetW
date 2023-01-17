const Discord = require('discord.js');
const discordPresence = require('../Utils/DiscordPresence');
const loadSlashCommands = require('../Loaders/loadSlashCommands');

module.exports = async client => {
    await loadSlashCommands(client);
    console.log(`Connecté en tant que ${client.user.tag}`);
    discordPresence(client);
}