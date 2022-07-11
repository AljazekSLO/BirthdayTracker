import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRouter from './routes/user.js'
import bdayRouter from './routes/bday.js'

dotenv.config();
const app = express();

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/user', userRouter)
app.use('/bday', bdayRouter)

app.get('/', (req, res) => {
    res.send("API Working!")
})

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        })
    })
    .catch((error) => console.log(error))