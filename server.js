const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const users = require('./endpoints/users');
const app = express();
const port = 3000;


app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());


userHandlers = users({ axios })

app.get('/', userHandlers.get);
app.post('/', userHandlers.post);
app.put('/:id', userHandlers.put);
app.delete('/:id', userHandlers.delete);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
