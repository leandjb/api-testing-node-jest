const axios = require('axios');

const handlers = {

    get: async (req, res) => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

        res.status(200).send(data);
    },

    post: async () => {

    },

    put: async () => {

    },

    delete: async () => {

    }
}

module.exports = handlers