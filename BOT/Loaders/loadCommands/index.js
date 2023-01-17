const fs = require('fs');
const loadCommandsVerification = require('./loadCommandsVerification.js');
const loadCateogries = require('./loadCategories.js');

module.exports = async client => {
    client.categoryList = {};
    fs.readdirSync('./Commandes/').filter(f => f.endsWith('.js')).forEach(async file => {
        let command = require(`../../Commandes/${file}`);

        if(!loadCommandsVerification(command, file)) return;
        await loadCateogries(client, command);

        client.commands.set(command.name, command);
        client.commandsList.push(command.name);

        console.log(`Commande chargée: ${command.name}`);
    })
    console.log('')
}