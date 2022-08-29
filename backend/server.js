const express = require ("express")
const port = process.env.PORT || 5000

const server = express()

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

server.get ('/', (req, res, next) => {
    res.send("Hello people my name is Charles Uthulor")
})

server.get ("/hello", (req, res, next) => {
    res.send("This is the page for hello")
})