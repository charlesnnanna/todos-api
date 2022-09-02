const request = require("supertest")
const app = require("../app")
const {connectDB, disconnectDB} = require('../config/db')
const Goal = require ('../models/goalModel')
let goals = []
const goal = { text : "Charles is here"}

 


//console.log("This is the test file"
    beforeAll(async() => {
        await connectDB()
        goals = await Goal.find()
        //console.log(goals)
    });

    test ("GET /api/goals/ --> array goals", () => {
         return request(app)
        .get('/api/goals/')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response._body[0].text).toEqual(goals[0].text)
        })
    })

    test ("POST /api/goals --> ", () => {
         return request(app)
        .post('/api/goals/')
        .send({text : "Charles is now on point"})
        .expect('Content-Type', /json/)
        .expect(201)
        .then ((response) => {
            expect(response._body.text).toEqual("Charles is now on point")
        })
        
    })

    
    test ("PUT /api/goals/:id --> ", () => {
         return request(app)
        .put('/api/goals/630e199acf780120ba269a2b')
        .send({text : "Charles is now a big man"})
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect (response._body.text).toEqual('Charles is now a big man')
        })
    })

    
    test ("DELETE /api/goals/:id --> ", () => {
         return request(app)
        .delete('/api/goals/6312092291fe490908b6cf91')
        .expect(200)
        .then((response) => {
            expect (response._body.message).toEqual('Delete goal 6312092291fe490908b6cf91')
        })
    })

 