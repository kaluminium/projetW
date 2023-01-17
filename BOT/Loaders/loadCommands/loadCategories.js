const loadCateogries = (client, command) => {
    if(!client.categoryList[command.category]) client.categoryList[command.category] = [];
    client.categoryList[command.category].push(command.name);
}

module.exports = loadCateogries;