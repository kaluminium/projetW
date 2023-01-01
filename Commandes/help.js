const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Affiche la liste des commandes',
    category: 'Info',
    usage: '[prefix]help',
    options : [
        {
            type: "string",
            name: "commande",
            description: "La commande dont vous voulez afficher les informations",
            required: false
        }
    ],

    async run(client, message, args) {
        if (!args[0]) {
            const embed = new Discord.EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Liste des commandes')
            .setDescription('Voici la liste des commandes disponibles')

            const categories = Object.keys(client.categoryList);
            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                embed.addFields({name : category, value : client.categoryList[category].join(', ')});
            }
            return message.reply({embeds : [embed]});
        }
        else {
            let command = client.commands.get(args[0].value);
            if(!command) return message.channel.send('Cette commande n\'existe pas');

            const embed = new Discord.EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`Commande ${command.name}`)
            .setDescription(command.description)
            .addFields(
                {name : 'Catégorie', value : command.category},
                {name : 'Utilisation', value : command.usage}
            )
            return message.reply({embeds : [embed]});
        }
    }
}