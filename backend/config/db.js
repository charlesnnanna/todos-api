const mongoose = require ("mongoose")

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://cuthulor:metaphor@cluster0.ysvzu.mongodb.net/todos-app?retryWrites=true&w=majority')
        //console.log(`Mongo DB Connected : ${conn.connection.host}`)
    }   catch (error){
         //console.log(error)
         //process.exit(1)
    }
}

module.exports = connectDB