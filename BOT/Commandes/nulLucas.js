const random = require('../Utils/Random')
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

module.exports = {
    name: 'nul',
    description: 'Dit si quelqu\'un est nul',
    category: 'Fun',
    usage: '[prefix]nul <@user>',
    options : [
        {
            type: "user",
            name: "user",
            description: "L'utilisateur dont vous voulez dire qu'il est nul",
            required: false
        }
    ],

    async run(client, message, args) {
        let user = message.member.id;
        if(args[0]) user = args[0].value;
        await message.reply(`<@${user}> ${random.randomChoice(list)} !`);
    }
}