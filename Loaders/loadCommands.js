const fs = require('fs');

module.exports = async client => {
    fs.readdirSync('./Commandes').filter(f => f.endsWith('.js')).forEach(async file => {
        let command = require(`../Commandes/${file}`);
        if(!command.name || typeof command.name !== 'string') return console.log(`La commande ${file} n'a pas de nom ou n'est pas une chaîne de caractères.`);
        client.commands.set(command.name, command);
        client.commandsList.push(command.name);
        console.log(`Commande chargée: ${command.name}`);
    })
}