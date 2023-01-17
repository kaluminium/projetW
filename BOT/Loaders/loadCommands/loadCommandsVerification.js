const loadCommandsVerification = (command, file) => {
    if(!command.name || typeof command.name !== 'string') {
        console.log(`La commande ${file} n'a pas de nom ou n'est pas une chaîne de caractères.`);
        return false;
    }
    if(!command.description || typeof command.description !== 'string') {
        console.log(`La commande ${file} n'a pas de description ou n'est pas une chaîne de caractères.`);
        return false;
    }
    if(!command.category || typeof command.category !== 'string') {
        console.log(`La commande ${file} n'a pas de catégorie ou n'est pas une chaîne de caractères.`);
        return false;
    }
    if(!command.usage || typeof command.usage !== 'string') {
        console.log(`La commande ${file} n'a pas d'utilisation ou n'est pas une chaîne de caractères.`);
        return false;
    }
    return true;
}

module.exports = loadCommandsVerification;