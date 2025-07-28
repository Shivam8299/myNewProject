import express from 'express'
import cors from 'cors' 
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 4000;


app.get('/', (req,res)=>{
    res.send("welcome to backend")
})

app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`)
})


