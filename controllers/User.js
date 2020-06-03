import mongoose from 'mongoose'
const user = require('../models/User')
const services = require('../services')


async function registro(req,res){

    try {
       
        const usuario = await user.create(req.body)
    
  if(!usuario) return res.status(500).send('No se pudo agregar el Usuario')
     const token = services.crearToken(req.body)
     console.log(token)
     res.json({
      token:token
    })
    
    } catch (error) {
        res.status(403).json({
            mensaje:'Ocurrio un error en el servidor',
            error
        })
    }
  
  
}

module.exports = {
   registro,
}
