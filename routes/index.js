import express from 'express'
const api = express.Router()
const user = require('../controllers/User')

api.post('/registro', user.registro)



module.exports = api