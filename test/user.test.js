const request = require('supertest')
const expect = require('chai').expect
const app = require('../server')
const User = require('../src/models/user.model')

describe('Check for user GET /',async () => {
    it('checking', async () => {
        const res = await request(app).get('/user/')
        expect(res.status).to.equal(200)
    })
})