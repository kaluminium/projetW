const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const config = require('../config.json');

module.exports = async client => {

    let commands = [];

    client.commands.forEach(async command => {

        let slashCommand = new Discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description);

        if(command.options?.length > 0){
            for(let i = 0; i < command.options.length; i++){
                slashCommand[`add${command.options[i].type.slice(0, 1).toUpperCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name).setDescription(command.options[i].description).setRequired(command.options[i].required));
            }
        }

        await commands.push(slashCommand);
    })

    const rest = new REST({ version: '10' }).setToken(config.token);

    await rest.put(Routes.applicationCommands(client.user.id), { body: commands })
    .then(() => console.log('Les slash commands ont été chargées avec succès'))
}