module.exports = async client =>{
    const discordPresenceList = require('./discordPresenceList')
    const { ActivityType } = require('discord.js');
    const Discord = require('discord.js');
    const { setInterval } = require('timers');
    const { randomChoice } = require('../Random');

    setInterval(() => {
        const presence = randomChoice(discordPresenceList);
        client.user.setPresence({
            activities: [{
                name: presence.name,
                type: presence.type
            }]
        });
    }, 10000);
}