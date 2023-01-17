const Discord = require('discord.js');

module.exports = async (client, interaction) =>{
    if(interaction.type === Discord.InteractionType.ApplicationCommand){
        let command = client.commands.get(interaction.commandName)
        if(!command) return;
    
        await command.run(client, interaction, interaction.options._hoistedOptions);
    }
}