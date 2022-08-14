const mongoose = require('mongoose')

const connectDB = async () => {
    try{
const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    console.log(`Database successfully connected: ${conn.connection.host}. Ain't that swell?`)
    }catch(error){
        console.error(error)
        //exit w/failure
        process.exit(1)
    }
}
module.exports = connectDB