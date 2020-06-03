import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
const config = require('./config')
const api = require('./routes')

const app = express()

//bd
mongoose.connect(config.db,config.options)
.then(
    ()=>{ console.log('Conectado a mongo')
     err => {err}
})



//Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Rutas
app.use('/api',api)

app.get('/', (req,res) =>{
    res.send('Hello Worlddd')
    })

//Middleware para Vue
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname,'public')))


//Puerto
app.listen(config.port, function(){
    console.log("Puerto escuchando")
})