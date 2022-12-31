module.exports = {
    name: 'nul',

    async run(client, message, args) {
        let user = message.mentions.users.first() || message.author;
        message.channel.send(`<@${user.id}> est nul !`);
    }
}