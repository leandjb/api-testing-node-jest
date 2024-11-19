const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const users = require('./endpoints/users');
const app = express();
const port = 3000;

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());



app.get('/', users.get);

app.post('/', async (req, res) => {
    const { body } = req;
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body);

    res.status(201).send(data);
});

app.put('/:id', async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);

    res.sendStatus(204);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
