import express from 'express'
import cors from 'cors' 
import 'dotenv/config'
import dbConnection from './config/db.js'
import router from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//user api endpints
app.use("/api/user",router);
app.use('/api/product', productRouter)


const port = process.env.PORT || 4000;

// importing and calling database
dbConnection()


app.get('/', (req,res)=>{
    res.send("welcome to backend")
})

app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`)
})


