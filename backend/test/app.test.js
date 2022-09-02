const request = require("supertest")
const app = require("../server")
const Goal = require ('../models/goalModel')
const { response } = require("../server")
const goals = Goal.find()
const goal = { text : "Charles is here"}
 


//console.log("This is the test file")
describe ("GOALS API", () => {
   // jest.useFakeTimers()
    it ("GET /api/goals --> array goals", () => {
        request(app)
        .get('/api/goals/')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
                expect(response.body).toEqual(expect.arrayContaining(goals))
        })
                
    })

    it ("POST /api/goal --> object goal", () => {
        request(app)
        .post('/api/goals/')
        .send({
            text : "Charles is here"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
                expect(response.body).toBe(goal)
        })
        .catch((err) => {
            console.log(err);
        })
    })

    /*
    it ("GET /api/goals/:id --> array todos", async() => {
        return request(app)
                .get('/api/goals/')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => {
                    expect(response.body).toEqual(expect.arrayContaining([
                        expect.objectContaining({
                            text : expect.any(String)
                        })
                    ]))
                })
                
    }) */
})