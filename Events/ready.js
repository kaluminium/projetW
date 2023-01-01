const Discord = require('discord.js');
const discordPresence = require('../Utils/DiscordPresence');

module.exports = async client => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    discordPresence(client);
}