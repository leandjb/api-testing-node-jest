const handlers = require("./index")

describe('endpoints', () => {
    describe('users', () => {
        describe('get', () => {
            it('should return users in JSON mock', () => {  //GET mock
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1}),
                } 
                console.log(axios.get)
            });

            

            // it('should return users on JSON', () => {   //GET Test
            //     const axios = jest.fn()
            // });






        });
    });


});