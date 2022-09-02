const express = require ("express")
const dotenv = require ("dotenv")
const goals = require ("./routes/goalRoutes")
const {errorHandler} = require('./middlewares/errorMiddleware')
const {connectDB} = require("./config/db")
const port = process.env.PORT || 5000

//connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/goals', goals)
app.use(errorHandler)



module.exports = app;