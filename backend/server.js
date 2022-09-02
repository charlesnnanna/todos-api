const app = require("./app")
const port = process.env.PORT || 5000


//if (process.env.NODE_ENV !== 'test'){
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
     }) 
//}
