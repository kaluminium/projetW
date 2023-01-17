const express = require('express');
const app = express();
const compteRouter = require('./routes/account');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use('/account', compteRouter);

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
