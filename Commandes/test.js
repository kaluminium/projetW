const Discord = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test',
    category: 'test',
    usage: 'test',

    async run(client, message, args) {
        message.channel.send('test');
    }
}