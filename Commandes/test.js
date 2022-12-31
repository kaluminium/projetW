const Discord = require('discord.js');

module.exports = {
    name: 'test',

    async run(client, message, args) {
        message.channel.send('test');
    }
}