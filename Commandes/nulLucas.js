const randomChoice = require("../Utils/Random/randomChoice");
const list = [
    "est nul",
    "est un gros nul",
    "sent la merde",
    "sent le caca",
    "est un gros caca",
    "est mauvais",
    "est mauvais en tout",
    "est mauvais en tout et pour tout",
    "est mauvais en tout et pour tout et pour rien",
    "pue",
    "pue la merde",
    "pue le caca",
    "pue la merde et le caca",
    "pue fort",
    "pue très fort"
]

randomChoice

module.exports = {
    name: 'nul',

    async run(client, message, args) {
        let user = message.mentions.users.first() || message.author;
        await message.channel.send(`<@${user.id}> ${randomChoice(list)} !`);
    }
}