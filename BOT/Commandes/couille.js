module.exports = {
    name: 'couille',
    description: 'caca',
    category: 'Fun',
    usage: '[prefix]couille',
    options : [
        {
            type: "integer",
            name: "nombre",
            description: "Le nombre de couilles",
            required: true
        }
    ],
    async run (client, message, args) {
        if(args[0].value > 100) return message.reply('Trop de couilles !')
        if(args[0].value == 0) return message.reply('Espece de couille nulle !')
        if(args[0].value < 0) return message.reply('Pas de couilles négatives !')
        let nombre = args[0].value;
        let couilles = '';
        for (let i = 0; i < nombre; i++) {
            couilles += '🍆';
        }
        message.reply(couilles);
    }
}