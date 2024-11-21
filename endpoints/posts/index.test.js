const request = require('supertest')
const app = require('../../server')


describe('server', () => {
    describe('enpoints', () => {
        describe('send a POST method', () => {
            it('should creates a new post', async () => {
                const response = await request(app).post('/')
                    .send({ userID: 5 })
                    .set('Content-Type', 'application/json')

                expect(response.statusCode).toEqual(201)
                // expect(response.body).toHavePropertyt('id')
            })
        })
    })
})




