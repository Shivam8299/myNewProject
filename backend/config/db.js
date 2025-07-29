import mongoose from 'mongoose'


let dbConnection = async ()=>{
    try {
      await mongoose.connect(process.env.DATABASE_URL) 
      console.log("db connected") 
    } catch (error) {
       console.log(`database connnection failed ${error}`) 
    }
}


export default dbConnection