const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 5000;

//routes
const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const editRouter = require('./routes/edit');
const deleteRouter = require('./routes/delete');

const app = express();

app.use(express.json());
app.use(express.text());
app.use( bodyParser({ extended: false }) )

hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => { });
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/add', addRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);
app.use('/', homeRouter);

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
module.exports = app;