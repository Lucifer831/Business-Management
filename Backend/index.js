const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')



dotenv.config()

const authrouter = require('./Route/Authroute.js')

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
                return callback(null, true)
            }

            return callback(new Error('Not allowed by CORS'))
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',authrouter)


app.get('/',(req,res)=>{
    console.log('Hi this is home')
    res.send("Hi this is home")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`ur app is running on port ${PORT}`)
})
