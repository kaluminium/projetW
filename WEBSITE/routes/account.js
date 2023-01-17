const express = require('express');
const bcrypt = require('bcrypt');
const compteRouter = express.Router();
const path = require('path');

async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash;
}
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

compteRouter.get('/register', (req, res) => {
    res.send(`
        <form action="./result" method="post">
            <label for="username">Pseudo :</label>
            <input type="text" id="username" name="username">
            <br>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password">
            <br><br>
            <input type="submit" value="Soumettre">
        </form>
    `);
});

compteRouter.post('/result', async (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username} Password: ${password}`);
    let encryptedPassword = await hashPassword(password);
    let comparison = await comparePassword(password, "$2b$10$EIZegsVLn7lczE.npcFS8eUeDWRtkRTComfJFy1tL7M2zQXOPViwO");

    res.send(`
        <html>
            <body>
                <p>Hash du mot de passe : ${encryptedPassword}</p>
                <p>Mot de passe : ${password}</p>
                <p>Pseudo : ${username}</p>
                <p>Comparaison : ${comparison}</p>
            </body>
        </html>
    `);
    res.end();
});

compteRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/account.html'));
})

module.exports = compteRouter;