const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client, message) => {
    console.log(client.commandsList)
    const prefix = config.prefix;

    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(' ');
    let commandName = messageArray[0].slice(prefix.length);
    let args = messageArray.slice(1);

    let filtre = client.commandsList.filter(x => x.startsWith(commandName.toLowerCase()))
    if(filtre.length == 0) return
    else if(filtre.length == 1) commandName = filtre[0]
    else {
        const embed = new Discord.EmbedBuilder()
        .setTitle(`Plusieurs commandes avec l'alias [${commandName}]`)
        .setColor("#FF0000")
        .setDescription(filtre.join(", "))
        .setFooter({text: "Veuillez préciser votre commande."})
        return message.channel.send({embeds : [embed]})
    }

    let command = client.commands.get(commandName)
    if(!command) return;

    command.run(client, message, args);
}